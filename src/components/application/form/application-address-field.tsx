import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { Form } from '@/app/application/step-1/step1.types'
import { countries } from '@/app/application/step-1/step1.data'

interface Props {
  register: UseFormRegister<Form>
  errors: FieldErrors<Form>
}

export const ApplicationAddressField = ({ register, errors }: Props) => {
  return (
    <section>
      <h2>Home Address</h2>
      <label>
        Home country *
        <select {...register('homeCountry', { required: 'Required' })}>
          <option value=''>Select country</option>
          {countries.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </label>
      {errors.homeCountry && <p className='error'>{errors.homeCountry.message}</p>}

      <label>
        Street address *
        <input type='text' {...register('streetAddress', { required: 'Required' })} />
      </label>
      {errors.streetAddress && (
        <p className='error'>{errors.streetAddress.message}</p>
      )}

      <label>
        Address Line 2
        <input type='text' {...register('addressLine2')} />
      </label>

      <label>
        City *
        <input type='text' {...register('city', { required: 'Required' })} />
      </label>
      {errors.city && <p className='error'>{errors.city.message}</p>}

      <label>
        ZIP or Postal Code *
        <input type='text' {...register('zipCode', { required: 'Required' })} />
      </label>
      {errors.zipCode && <p className='error'>{errors.zipCode.message}</p>}

      <label>
        Is your billing address the same as home address? *
        <select {...register('billingSame', { required: 'Required' })}>
          <option value=''>Select</option>
          <option value='Yes'>Yes</option>
          <option value='No'>No</option>
        </select>
      </label>
      {errors.billingSame && <p className='error'>{errors.billingSame.message}</p>}
    </section>
  )
}
