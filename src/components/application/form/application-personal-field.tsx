import { countries, days, months, yearsDob } from '@/app/application/step-1/step1.data'
import { Form } from '@/app/application/step-1/step1.types'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface Props {
  register: UseFormRegister<Form>
  errors: FieldErrors<Form>
}

export const ApplicationPersonalField = ({ register, errors }: Props) => {
  return (
    <section>
      <h2>Information About the Traveler</h2>

      <label>
        Last name (as in passport) *
        <input
          type='text'
          {...register('lastName', { required: 'Last name is required' })}
        />
      </label>
      {errors.lastName && <p className='error'>{errors.lastName.message}</p>}

      <label>
        Given names (as in passport) *
        <input
          type='text'
          {...register('givenNames', { required: 'Given names are required' })}
        />
      </label>
      {errors.givenNames && <p className='error'>{errors.givenNames.message}</p>}

      <label>
        Are you known by any other official names or aliases? *
        <select {...register('aliases', { required: 'Select an option' })}>
          <option value=''>Select</option>
          <option value='Yes'>Yes</option>
          <option value='No'>No</option>
        </select>
      </label>
      {errors.aliases && <p className='error'>{errors.aliases.message}</p>}

      <fieldset>
        <legend>Date of Birth *</legend>
        <label>
          Day
          <select {...register('dobDay', { required: 'Day is required' })}>
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
          <select {...register('dobMonth', { required: 'Month is required' })}>
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
          <select {...register('dobYear', { required: 'Year is required' })}>
            <option value=''>Year</option>
            {yearsDob.map(y => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>
      </fieldset>
      {(errors.dobDay || errors.dobMonth || errors.dobYear) && (
        <p className='error'>Date of birthday is required</p>
      )}

      <label>
        In which city were you born? *
        <input
          type='text'
          {...register('birthCity', { required: 'City of birth is required' })}
        />
      </label>
      {errors.birthCity && <p className='error'>{errors.birthCity.message}</p>}

      <label>
        Country of birth *
        <select
          {...register('birthCountry', { required: 'Country of birth is required' })}
        >
          <option value=''>Select country</option>
          {countries.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </label>
      {errors.birthCountry && <p className='error'>{errors.birthCountry.message}</p>}
    </section>
  )
}
