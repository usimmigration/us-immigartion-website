import { Form } from '@/app/application/step-1/step1.types'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

export function ApplicationEmailField({
	register,
	errors,
}: {
	register: UseFormRegister<Form>
	errors: FieldErrors<Form>
}) {
	return (
		<>
			<label>
				Email address *
				<input
					type='email'
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: /^\S+@\S+\.\S+$/,
							message: 'Incorrect email format',
						},
					})}
				/>
			</label>
			{errors.email && <p className='error'>{errors.email.message}</p>}
		</>
	)
}
