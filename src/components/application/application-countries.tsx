export function ApplicationCountries({ t }: { t: any }) {
	return (
		<section className='mb-16 bg-white rounded-lg shadow-md p-8'>
			<h2 className='text-3xl font-bold mb-6'>{t.visaCountriesTitle}</h2>
			<ul className='grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 text-gray-900 font-medium max-w-4xl'>
				{t.visaCountries.map((country: string) => (
					<li
						key={country}
						className="before:content-['•'] before:text-blue-600 before:mr-2"
					>
						{country}
					</li>
				))}
			</ul>
		</section>
	)
}
