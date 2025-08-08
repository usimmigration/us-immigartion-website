export function ApplicationTrust({ t }: { t: any }) {
	return (
		<section className='mb-16 bg-white rounded-lg shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
			<div>
				<h2 className='text-3xl font-bold mb-4'>{t.trustTitle}</h2>
				<p className='mb-6 text-gray-700'>{t.trustDescription}</p>
				<ul className='list-disc pl-5 space-y-4 text-gray-800'>
					{t.trustItems.map(
						({ title, desc }: { title: string; desc: string }, i: number) => (
							<li key={i}>
								<strong className='text-blue-800'>{title}:</strong> {desc}
							</li>
						)
					)}
				</ul>
			</div>
			<div className='hidden md:block'>
				<img
					src='https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80'
					alt='Trust and security'
					className='rounded-lg shadow-md object-cover w-full'
					loading='lazy'
				/>
			</div>
		</section>
	)
}
