import EstaForm from './EstaForm'

export default async function EstaFormPage({
	searchParams,
}: {
	searchParams: Promise<{ lang: string }>
}) {
	return <EstaForm langFromQuery={(await searchParams).lang} />
}
