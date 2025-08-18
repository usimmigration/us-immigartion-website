'use client'

import {
	ApplicationAdditionalField,
	ApplicationAddressField,
	ApplicationContactField,
	ApplicationParentsField,
	ApplicationPassportField,
	ApplicationPersonalField,
} from '@/components/application/form'
import { useApply } from '@/hooks/useApplication'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './step1.styles.css'
import { type Form } from './step1.types'

export default function EstaForm() {
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
		// defaultValues: {
		// 	email: 'john.doe@example.com',
		// 	confirmEmail: 'john.doe@example.com',
		// 	altEmail: 'alt.john@example.com',
		// 	phoneType: 'Mobile',
		// 	phonePrefix: '+1',
		// 	phoneNumber: '5551234567',
		// 	lastName: 'Doe',
		// 	givenNames: 'John',
		// 	aliases: 'No',
		// 	dobDay: '01',
		// 	dobMonth: '01',
		// 	dobYear: '1990',
		// 	birthCity: 'New York',
		// 	birthCountry: 'USA',
		// 	parent1LastName: 'Doe',
		// 	parent1FirstName: 'Jane',
		// 	parent2LastName: 'Doe',
		// 	parent2FirstName: 'Jack',
		// 	passportCountry: 'USA',
		// 	passportIssuedDay: '01',
		// 	passportIssuedMonth: '01',
		// 	passportIssuedYear: '2020',
		// 	passportExpiryDay: '01',
		// 	passportExpiryMonth: '01',
		// 	passportExpiryYear: '2030',
		// 	passportNumber: 'A1234567',
		// 	citizenshipCountry: 'USA',
		// 	gender: 'Male',
		// 	otherCitizenship: 'No',
		// 	otherPassportIssued: 'No',
		// 	homeCountry: 'USA',
		// 	streetAddress: '123 Main St',
		// 	addressLine2: '',
		// 	city: 'New York',
		// 	zipCode: '10001',
		// 	billingSame: 'Yes',
		// 	socialMediaDisclose: 'No',
		// 	currentEmployer: 'No',
		// 	travelItinerary: 'stay',
		// 	questionA: 'No',
		// 	questionB: 'No',
		// 	questionC: 'No',
		// 	questionD: 'No',
		// 	questionE: 'No',
		// 	questionF: 'No',
		// 	questionG: 'No',
		// 	questionH: 'No',
		// 	questionI: 'No',
		// 	questionJ: 'No',
		// 	emergencyLastName: 'Smith',
		// 	emergencyFirstName: 'Jane',
		// 	emergencyPhonePrefix: '+1',
		// 	emergencyPhoneNumber: '5559876543',
		// 	emergencyEmail: 'emergency.jane@example.com',
		// },
	})

	const onSubmit = async (data: Form) => {
		await mutateAsync(data)
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
