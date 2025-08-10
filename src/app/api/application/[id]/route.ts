import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function DELETE(
	_: any,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const id = (await params).id
		if (!id || !id.length) {
			return NextResponse.json({ error: 'Invalid ID' }, { status: 422 })
		}

		await prisma.application.delete({
			where: { id },
		})

		return NextResponse.json({ ok: true }, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		)
	}
}
