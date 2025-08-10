import { Form } from '@/app/application/step-1/step1.types'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface Props {
	register: UseFormRegister<Form>
	errors: FieldErrors<Form>
}

export const ApplicationParentsField = ({ register, errors }: Props) => {
	return (
		<section>
			<h3>Parent 1</h3>
			<label>
				Last name *
				<input
					type='text'
					{...register('parent1LastName', { required: 'Required' })}
				/>
			</label>
			{errors.parent1LastName && (
				<p className='error'>{errors.parent1LastName.message}</p>
			)}

			<label>
				First name *
				<input
					type='text'
					{...register('parent1FirstName', { required: 'Required' })}
				/>
			</label>
			{errors.parent1FirstName && (
				<p className='error'>{errors.parent1FirstName.message}</p>
			)}

			<h3>Parent 2</h3>
			<label>
				Last name *
				<input
					type='text'
					{...register('parent2LastName', { required: 'Required' })}
				/>
			</label>
			{errors.parent2LastName && (
				<p className='error'>{errors.parent2LastName.message}</p>
			)}

			<label>
				First name *
				<input
					type='text'
					{...register('parent2FirstName', { required: 'Required' })}
				/>
			</label>
			{errors.parent2FirstName && (
				<p className='error'>{errors.parent2FirstName.message}</p>
			)}
		</section>
	)
}
