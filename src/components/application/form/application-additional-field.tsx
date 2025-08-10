import {
	countries,
	mandatoryQuestions,
} from '@/app/application/step-1/step1.data'
import { Form } from '@/app/application/step-1/step1.types'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface Props {
	register: UseFormRegister<Form>
	errors: FieldErrors<Form>
}

export const ApplicationAdditionalField = ({ register, errors }: Props) => {
	return (
		<section>
			<label>
				Do you consent to disclose your social media accounts? *
				<select {...register('socialMediaDisclose', { required: 'Required' })}>
					<option value=''>Select</option>
					<option value='Yes'>Yes</option>
					<option value='No'>No</option>
				</select>
			</label>
			{errors.socialMediaDisclose && (
				<p className='error'>{errors.socialMediaDisclose.message}</p>
			)}

			<label>
				Do you currently have an employer? *
				<select {...register('currentEmployer', { required: 'Required' })}>
					<option value=''>Select</option>
					<option value='Yes'>Yes</option>
					<option value='No'>No</option>
				</select>
			</label>
			{errors.currentEmployer && (
				<p className='error'>{errors.currentEmployer.message}</p>
			)}

			<label>
				Travel itinerary *
				<select {...register('travelItinerary', { required: 'Required' })}>
					<option value=''>Select</option>
					<option value='transit'>Transit through the US</option>
					<option value='stay'>Stay in the US</option>
				</select>
			</label>
			{errors.travelItinerary && (
				<p className='error'>{errors.travelItinerary.message}</p>
			)}

			<h2>Mandatory Questions</h2>
			{Object.entries(mandatoryQuestions).map(([key, q]) => (
				<label key={key}>
					{key.toUpperCase()}) {q} *
					<select
						{...register(`question${key.toUpperCase()}` as any, {
							required: 'Required',
						})}
					>
						<option value=''>Select</option>
						<option value='Yes'>Yes</option>
						<option value='No'>No</option>
					</select>
					{errors[`question${key.toUpperCase()}` as keyof Form] && (
						<p className='error'>
							{errors[`question${key.toUpperCase()}` as keyof Form]?.message}
						</p>
					)}
				</label>
			))}

			<h2>Emergency Contact</h2>
			<label>
				Last name *
				<input
					type='text'
					{...register('emergencyLastName', { required: 'Required' })}
				/>
			</label>
			{errors.emergencyLastName && (
				<p className='error'>{errors.emergencyLastName.message}</p>
			)}

			<label>
				First name *
				<input
					type='text'
					{...register('emergencyFirstName', { required: 'Required' })}
				/>
			</label>
			{errors.emergencyFirstName && (
				<p className='error'>{errors.emergencyFirstName.message}</p>
			)}

			<label>
				Country Prefix *
				<select {...register('emergencyPhonePrefix', { required: 'Required' })}>
					<option value=''>Select prefix</option>
					{countries.map(({ code, name, prefix }) => (
						<option key={code} value={prefix}>
							{name} ({prefix})
						</option>
					))}
				</select>
			</label>
			{errors.emergencyPhonePrefix && (
				<p className='error'>{errors.emergencyPhonePrefix.message}</p>
			)}

			<label>
				Phone Number *
				<input
					type='tel'
					{...register('emergencyPhoneNumber', {
						required: 'Required',
						pattern: {
							value: /^[0-9+\-\s()]{4,20}$/,
							message: 'Incorrect phone number format',
						},
					})}
				/>
			</label>
			{errors.emergencyPhoneNumber && (
				<p className='error'>{errors.emergencyPhoneNumber.message}</p>
			)}

			<label>
				Email *
				<input
					type='email'
					{...register('emergencyEmail', {
						required: 'Required',
						pattern: {
							value: /^\S+@\S+\.\S+$/,
							message: 'Email is invalid',
						},
					})}
				/>
			</label>
			{errors.emergencyEmail && (
				<p className='error'>{errors.emergencyEmail.message}</p>
			)}
		</section>
	)
}
