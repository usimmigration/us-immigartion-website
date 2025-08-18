import { stripe } from '@/lib/stripe'
import { PAYMENT_STATUS, PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export const config = {
	api: {
		bodyParser: false,
	},
}

const prisma = new PrismaClient()

const applicationSchema = z.object({
	email: z.string().email(),
	confirmEmail: z.string().email(),
	altEmail: z.string().email().optional(),
	phoneType: z.string().min(1),
	phonePrefix: z.string().min(1),
	phoneNumber: z.string().min(3),
	lastName: z.string().min(1),
	givenNames: z.string().min(1),
	aliases: z.enum(['Yes', 'No']),
	dobDay: z.string().regex(/^(0?[1-9]|[12][0-9]|3[01])$/),
	dobMonth: z.string().regex(/^(0?[1-9]|1[0-2])$/),
	dobYear: z.string().regex(/^\d{4}$/),
	birthCity: z.string().min(1),
	birthCountry: z.string().min(1),
	parent1LastName: z.string().min(1),
	parent1FirstName: z.string().min(1),
	parent2LastName: z.string().min(1),
	parent2FirstName: z.string().min(1),
	passportCountry: z.string().min(1),
	passportIssuedDay: z.string().regex(/^(0?[1-9]|[12][0-9]|3[01])$/),
	passportIssuedMonth: z.string().regex(/^(0?[1-9]|1[0-2])$/),
	passportIssuedYear: z.string().regex(/^\d{4}$/),
	passportExpiryDay: z.string().regex(/^(0?[1-9]|[12][0-9]|3[01])$/),
	passportExpiryMonth: z.string().regex(/^(0?[1-9]|1[0-2])$/),
	passportExpiryYear: z.string().regex(/^\d{4}$/),
	passportNumber: z.string().min(1),
	citizenshipCountry: z.string().min(1),
	gender: z.enum(['Male', 'Female', 'Other']),
	otherCitizenship: z.enum(['Yes', 'No']),
	otherPassportIssued: z.enum(['Yes', 'No']),
	homeCountry: z.string().min(1),
	streetAddress: z.string().min(1),
	addressLine2: z.string().optional(),
	city: z.string().min(1),
	zipCode: z.string().min(1),
	billingSame: z.enum(['Yes', 'No']),
	socialMediaDisclose: z.enum(['Yes', 'No']),
	currentEmployer: z.enum(['Yes', 'No']),
	travelItinerary: z.enum(['transit', 'stay']),
	questionA: z.enum(['Yes', 'No']),
	questionB: z.enum(['Yes', 'No']),
	questionC: z.enum(['Yes', 'No']),
	questionD: z.enum(['Yes', 'No']),
	questionE: z.enum(['Yes', 'No']),
	questionF: z.enum(['Yes', 'No']),
	questionG: z.enum(['Yes', 'No']),
	questionH: z.enum(['Yes', 'No']),
	questionI: z.enum(['Yes', 'No']),
	questionJ: z.enum(['Yes', 'No']),
	emergencyLastName: z.string().min(1),
	emergencyFirstName: z.string().min(1),
	emergencyPhonePrefix: z.string().min(1),
	emergencyPhoneNumber: z.string().min(3),
	emergencyEmail: z.string().email(),
})

export async function POST(req: Request) {
	try {
		const formData = await req.formData()
		const fields = Object.fromEntries(formData.entries())

		const data = applicationSchema.parse(fields)

		if (data.email !== data.confirmEmail) {
			return NextResponse.json(
				{ error: 'Email and confirmEmail do not match' },
				{ status: 400 }
			)
		}

		let passportFileBase64: string | null = null
		const passportFile = formData.get('passportFile')
		if (passportFile && passportFile instanceof File) {
			const arrayBuffer = await passportFile.arrayBuffer()
			const buffer = Buffer.from(arrayBuffer)
			passportFileBase64 = buffer.toString('base64')
		}

		const application = await prisma.application.create({
			data: {
				email: data.email,
				paymentStatus: PAYMENT_STATUS.UNPAID,
				ApplicationData: {
					create: {
						...data,
						passportFile: passportFileBase64,
					},
				},
			},
		})

		const paymentLink = await stripe.paymentLinks.create({
			line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
			metadata: { applicationId: application.id },
			after_completion: {
				type: 'redirect',
				redirect: {
					url: `${process.env.NEXT_PUBLIC_APP_URL}/application/success`,
				},
			},
		})

		await prisma.application.update({
			where: { id: application.id },
			data: { paymentLink: paymentLink.url },
		})

		return NextResponse.json(
			{ id: application.id, link: paymentLink.url },
			{ status: 201 }
		)
	} catch (error) {
		if (error instanceof z.ZodError)
			return NextResponse.json({ error: error.issues[0] }, { status: 400 })
		console.error(error)
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		)
	}
}
