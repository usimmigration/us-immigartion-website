export function ApplicationService({ t }: { t: any }) {
	return (
		<section className='mb-16 bg-white rounded-lg shadow-md p-8'>
			<h2 className='text-3xl font-bold mb-6'>{t.serviceTitle}</h2>
			<p className='mb-8 text-gray-700 leading-relaxed'>
				{t.serviceDescription}
			</p>
			<h3 className='text-2xl font-semibold mb-4'>{t.howHelpTitle}</h3>
			<ul className='list-disc list-inside space-y-3 mb-8 text-gray-800 max-w-prose'>
				{t.howHelpList.map((item: string, i: number) => (
					<li key={i}>{item}</li>
				))}
			</ul>
			<button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded shadow transition'>
				{t.startApplication}
			</button>
		</section>
	)
}
