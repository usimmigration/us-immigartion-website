import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { prisma } from '@/lib/prisma'
import { stripe } from '@/lib/stripe'

async function buffer(readable: ReadableStream<Uint8Array>) {
	const chunks = []
	const reader = readable.getReader()
	while (true) {
		const { done, value } = await reader.read()
		if (done) break
		chunks.push(value)
	}
	return Buffer.concat(chunks)
}

export async function POST(req: NextRequest) {
	if (!req.body) return NextResponse.json({error: "No body"}, { status: 422 })
		
	const buf = await buffer(req.body)
	const sig = req.headers.get('stripe-signature')!

	let event: Stripe.Event

	try {
		event = stripe.webhooks.constructEvent(
			buf,
			sig,
			process.env.STRIPE_WEBHOOK_SECRET!
		)
	} catch (err) {
		console.error('Webhook signature verification failed.', err)
		return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
	}

	if (event.type === 'checkout.session.completed') {
		const session = event.data.object as Stripe.Checkout.Session

		const applicationId = session.metadata?.applicationId
		if (!applicationId) {
			console.error('No applicationId in metadata')
			return NextResponse.json({ error: 'No applicationId' }, { status: 400 })
		}

		try {
			await prisma.application.update({
				where: { id: applicationId },
				data: { paymentStatus: 'PAID' },
			})
			console.log(`Application ${applicationId} marked as PAID`)
		} catch (e) {
			console.error('Prisma update error', e)
			return NextResponse.json(
				{ error: 'Database update failed' },
				{ status: 500 }
			)
		}
	}

	return NextResponse.json({ received: true })
}
