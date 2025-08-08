export function ApplicationHero({ t }: { t: any }) {
	return (
		<section className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-14 bg-white rounded-lg shadow-lg p-8'>
			<div className='md:col-span-2'>
				<h1 className='text-4xl font-extrabold mb-6 leading-tight'>
					{t.statsTitle}
				</h1>
				<div className='flex gap-8 flex-wrap'>
					{t.stats.map(({ value, label }: { value: string; label: string }) => (
						<div
							key={label}
							className='flex flex-col items-center justify-center bg-blue-100 rounded-lg p-6 flex-1 min-w-[110px]'
						>
							<span className='text-5xl font-bold text-blue-700'>{value}</span>
							<span className='uppercase font-semibold text-sm mt-2'>
								{label}
							</span>
						</div>
					))}
				</div>
			</div>
			<div className='hidden md:block'>
				<img
					src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
					alt='Secure data'
					className='rounded-lg shadow-md object-cover w-full'
					loading='lazy'
				/>
			</div>
		</section>
	)
}
