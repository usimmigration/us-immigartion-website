import { Application } from './Application'

export default async function EstaInfoPage({
	searchParams,
}: {
	searchParams: Promise<{ lang: string }>
}) {
	const lang = (await searchParams).lang
	return <Application langFromQuery={lang} />
}
