import { LANGS } from '@/app/application/application.data'
import { useRouter } from 'next/navigation'

export function LanguageSelector({
	lang,
	setLang,
}: {
	lang: string
	setLang: (lang: string) => void
}) {
	const router = useRouter()

	function changeLang(newLang: string) {
		if (newLang === lang) return
		setLang(newLang)
		const url = new URL(window.location.href)
		url.searchParams.set('lang', newLang)
		router.replace(url.toString())
	}

	return (
		<div className='flex justify-end mb-8'>
			<select
				aria-label='Select language'
				value={lang}
				onChange={e => changeLang(e.target.value)}
				className='border border-gray-300 rounded px-3 py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
			>
				{LANGS.map(({ code, label }) => (
					<option key={code} value={code}>
						{label}
					</option>
				))}
			</select>
		</div>
	)
}
