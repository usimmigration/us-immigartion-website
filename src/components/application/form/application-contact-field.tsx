import { countries, phoneTypes } from '@/app/application/step-1/step1.data'
import { Form } from '@/app/application/step-1/step1.types'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { ApplicationEmailField } from './application-email-field'

interface Props {
	register: UseFormRegister<Form>
	errors: FieldErrors<Form>
	email: string
}

export const ApplicationContactField = ({ register, errors, email }: Props) => {
	return (
		<section>
			<h2>Traveler Contact Information</h2>
			<ApplicationEmailField register={register} errors={errors} />

			<label>
				Confirm email *
				<input
					type='email'
					{...register('confirmEmail', {
						required: 'Email confirmation is required',
						validate: val => val === email || 'Emails do not match',
					})}
				/>
			</label>
			{errors.confirmEmail && (
				<p className='error'>{errors.confirmEmail.message}</p>
			)}

			<label>
				Alternative email address
				<input
					type='email'
					{...register('altEmail', {
						pattern: {
							value: /^\S+@\S+\.\S+$/,
							message: 'Incorrect email format',
						},
					})}
				/>
			</label>
			{errors.altEmail && <p className='error'>{errors.altEmail.message}</p>}

			<label>
				Telephone number or cellphone number *
				<select {...register('phoneType', { required: 'Select phone type' })}>
					<option value=''>Select type</option>
					{phoneTypes.map(type => (
						<option key={type} value={type}>
							{type}
						</option>
					))}
				</select>
			</label>
			{errors.phoneType && <p className='error'>{errors.phoneType.message}</p>}

			<label>
				Country Prefix *
				<select
					{...register('phonePrefix', { required: 'Select phone prefix' })}
				>
					<option value=''>Select prefix</option>
					{countries.map(({ code, name, prefix }) => (
						<option key={code} value={prefix}>
							{name} ({prefix})
						</option>
					))}
				</select>
			</label>
			{errors.phonePrefix && (
				<p className='error'>{errors.phonePrefix.message}</p>
			)}

			<label>
				Phone Number *
				<input
					type='tel'
					{...register('phoneNumber', {
						required: 'Phone number is required',
						pattern: {
							value: /^[0-9+\-\s()]{4,20}$/,
							message: 'Incorrect phone number format',
						},
					})}
				/>
			</label>
			{errors.phoneNumber && (
				<p className='error'>{errors.phoneNumber.message}</p>
			)}
		</section>
	)
}
