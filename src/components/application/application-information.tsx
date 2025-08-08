export function ApplicationInformation({ t }: { t: any }) {
	return (
		<section className='mb-16 bg-white rounded-lg shadow-md p-8 w-full'>
			<h2 className='text-3xl font-bold mb-6'>{t.infoTitle}</h2>
			{t.infoText.split('\n\n').map((para: string, i: number) => (
				<p key={i} className='mb-4 text-gray-700 leading-relaxed'>
					{para}
				</p>
			))}
		</section>
	)
}
