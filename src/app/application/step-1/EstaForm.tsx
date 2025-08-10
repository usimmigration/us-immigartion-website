'use client'

import './step1.styles.css'
import { useForm } from 'react-hook-form'
import { type Form } from './step1.types'
import {
	ApplicationContactField,
	ApplicationPersonalField,
	ApplicationParentsField,
	ApplicationPassportField,
	ApplicationAddressField,
	ApplicationAdditionalField,
} from '@/components/application/form'
import { useApply } from '@/hooks/useApplication'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LANGS, TRANSLATIONS } from '../application.data'

export default function EstaForm({ langFromQuery }: { langFromQuery: string }) {
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

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const link = sessionStorage.getItem('paymentLink')
			const applicationId = sessionStorage.getItem('applicationId')
			if (link && applicationId) {
				window.location.href = '/application/step-2'
			}
		}
	}, [])

	const { mutateAsync, isPending } = useApply()

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<Form>({
		mode: 'onBlur',
	})

	const onSubmit = async (data: Form) => {
		const { passportFile, ...rest } = data
		const body = { ...rest, passportFile: rest.passportFileBase64 }

		await mutateAsync(body)
	}

	const email = watch('email')

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<ApplicationContactField
				register={register}
				errors={errors}
				email={email}
			/>
			<ApplicationPersonalField register={register} errors={errors} />
			<ApplicationParentsField register={register} errors={errors} />
			<ApplicationPassportField
				register={register}
				errors={errors}
				setValue={setValue}
			/>
			<ApplicationAddressField register={register} errors={errors} />
			<ApplicationAdditionalField register={register} errors={errors} />
			<button
				type='submit'
				disabled={isPending}
				className='disabled:opacity-50 disabled:cursor-not-allowed'
			>
				Submit ESTA Application
			</button>
		</form>
	)
}
