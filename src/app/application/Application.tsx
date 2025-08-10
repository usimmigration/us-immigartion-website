'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { TRANSLATIONS, LANGS } from './application.data'
import {
	LanguageSelector,
	ApplicationHero,
	ApplicationTrust,
	ApplicationService,
	ApplicationCountries,
	ApplicationInformation,
	ApplicationAccreditation,
} from '@/components/application'
import { ApplicationForm } from '@/components/application/application-form'

export function Application({ langFromQuery }: { langFromQuery: string }) {
	const router = useRouter()

	const [lang, setLang] = useState('en')

	useEffect(() => {
		if (langFromQuery && LANGS.some(l => l.code === langFromQuery)) {
			setLang(langFromQuery)
		} else {
			setLang('en')
			const url = new URL(window.location.href)
			url.searchParams.set('lang', 'en')
			router.replace(url.toString())
		}
	}, [langFromQuery])

	const t = TRANSLATIONS[lang as keyof typeof TRANSLATIONS]?.statsTitle
		? TRANSLATIONS[lang as keyof typeof TRANSLATIONS]
		: TRANSLATIONS.en

	return (
		<main className='min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 font-sans p-6 max-w-7xl mx-auto'>
			<LanguageSelector lang={lang} setLang={setLang} />

			<ApplicationForm t={t} />
			<ApplicationHero t={t} />
			<ApplicationTrust t={t} />
			<ApplicationService t={t} />
			<ApplicationCountries t={t} />
			<ApplicationInformation t={t} />
			<ApplicationAccreditation t={t} />
		</main>
	)
}
