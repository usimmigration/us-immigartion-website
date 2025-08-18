import {
	countries,
	days,
	months,
	yearsPassportExpiry,
	yearsPassportIssue,
} from '@/app/application/step-1/step1.data'
import { Form } from '@/app/application/step-1/step1.types'
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'

interface Props {
	register: UseFormRegister<Form>
	errors: FieldErrors<Form>
	setValue: UseFormSetValue<Form>
}

export const ApplicationPassportField = ({
	register,
	errors,
}: Props) => {
	return (
		<section>
			<h2>Passport Details</h2>

			<label>
				Passport issued by country *
				<select {...register('passportCountry', { required: 'Required' })}>
					<option value=''>Select country</option>
					{countries.map(({ code, name }) => (
						<option key={code} value={code}>
							{name}
						</option>
					))}
				</select>
			</label>
			{errors.passportCountry && (
				<p className='error'>{errors.passportCountry.message}</p>
			)}

			<fieldset>
				<legend>Passport issue date *</legend>
				<label>
					Day
					<select {...register('passportIssuedDay', { required: 'Required' })}>
						<option value=''>Day</option>
						{days.map(d => (
							<option key={d} value={d}>
								{d}
							</option>
						))}
					</select>
				</label>

				<label>
					Month
					<select
						{...register('passportIssuedMonth', { required: 'Required' })}
					>
						<option value=''>Month</option>
						{months.map(({ value, label }) => (
							<option key={value} value={value}>
								{label}
							</option>
						))}
					</select>
				</label>

				<label>
					Year
					<select {...register('passportIssuedYear', { required: 'Required' })}>
						<option value=''>Year</option>
						{yearsPassportIssue.map(y => (
							<option key={y} value={y}>
								{y}
							</option>
						))}
					</select>
				</label>
			</fieldset>
			{(errors.passportIssuedDay ||
				errors.passportIssuedMonth ||
				errors.passportIssuedYear) && (
				<p className='error'>Pass issue date is required</p>
			)}

			<fieldset>
				<legend>Passport expiry date *</legend>
				<label>
					Day
					<select {...register('passportExpiryDay', { required: 'Required' })}>
						<option value=''>Day</option>
						{days.map(d => (
							<option key={d} value={d}>
								{d}
							</option>
						))}
					</select>
				</label>

				<label>
					Month
					<select
						{...register('passportExpiryMonth', { required: 'Required' })}
					>
						<option value=''>Month</option>
						{months.map(({ value, label }) => (
							<option key={value} value={value}>
								{label}
							</option>
						))}
					</select>
				</label>

				<label>
					Year
					<select {...register('passportExpiryYear', { required: 'Required' })}>
						<option value=''>Year</option>
						{yearsPassportExpiry.map(y => (
							<option key={y} value={y}>
								{y}
							</option>
						))}
					</select>
				</label>
			</fieldset>
			{(errors.passportExpiryDay ||
				errors.passportExpiryMonth ||
				errors.passportExpiryYear) && (
				<p className='error'>Pass expiry date is required</p>
			)}

			<label>
				Passport number *
				<input
					type='text'
					{...register('passportNumber', { required: 'Required' })}
				/>
			</label>
			{errors.passportNumber && (
				<p className='error'>{errors.passportNumber.message}</p>
			)}

			<label>
				Citizenship country *
				<select {...register('citizenshipCountry', { required: 'Required' })}>
					<option value=''>Select country</option>
					{countries.map(({ code, name }) => (
						<option key={code} value={code}>
							{name}
						</option>
					))}
				</select>
			</label>
			{errors.citizenshipCountry && (
				<p className='error'>{errors.citizenshipCountry.message}</p>
			)}

			<label>
				Gender *
				<select {...register('gender', { required: 'Required' })}>
					<option value=''>Select gender</option>
					<option value='Male'>Male</option>
					<option value='Female'>Female</option>
					<option value='Other'>Other</option>
				</select>
			</label>
			{errors.gender && <p className='error'>{errors.gender.message}</p>}

			<label>
				Upload Passport Photo (jpg, png) *
				<input
					type='file'
					accept='image/jpeg,image/png'
					{...register('passportFile', {
						required: 'File is required',
						validate: {
							checkFileType: files =>
								files && files.length > 0
									? ['image/jpeg', 'image/png'].includes(files[0].type) ||
									  'Incorrect file format'
									: 'File is required',
						},
					})}
				/>
			</label>
			{errors.passportFile && (
				<p className='error'>{errors.passportFile.message as string}</p>
			)}

			<label>
				Do you have other citizenships? *
				<select {...register('otherCitizenship', { required: 'Required' })}>
					<option value=''>Select</option>
					<option value='Yes'>Yes</option>
					<option value='No'>No</option>
				</select>
			</label>
			{errors.otherCitizenship && (
				<p className='error'>{errors.otherCitizenship.message}</p>
			)}

			<label>
				Have you been issued other passports? *
				<select {...register('otherPassportIssued', { required: 'Required' })}>
					<option value=''>Select</option>
					<option value='Yes'>Yes</option>
					<option value='No'>No</option>
				</select>
			</label>
			{errors.otherPassportIssued && (
				<p className='error'>{errors.otherPassportIssued.message}</p>
			)}
		</section>
	)
}
