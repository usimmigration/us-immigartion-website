export function ApplicationForm({ t }: { t: any }) {
	return (
		<section id='form' className='mb-16 bg-white rounded-lg shadow-md p-8 mx-0'>
			<h1 className='text-2xl font-semibold'>{t.form.title}</h1>
			<form className='py-4' action='/application/step-1'>
				<div className='flex flex-col gap-4 max-w-lg'>
					<label htmlFor='pass-country'>{t.form.passportCountryLabel}</label>
					<input
						className='border border-gray-300 rounded-md px-4 py-2'
						type='text'
						id='pass-country'
						placeholder={t.form.passportCountryPlaceholder}
						required
					/>
				</div>
				<button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 mt-3 rounded shadow transition'>
					{t.form.nextButton}
				</button>
			</form>
		</section>
	)
}
