export function Advantages() {
	return (
		<div className='relative'>
			<div
				className='absolute inset-0 bg-cover bg-center'
				style={{
					backgroundImage:
						'url(https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1200)',
				}}
			/>
			<div className='absolute inset-0 bg-black opacity-60' />

			<div className='relative z-10 flex flex-col md:flex-row items-center justify-around py-10 text-white'>
				<div className='flex flex-col items-center mb-6 md:mb-0'>
					<h3 className='text-3xl font-bold'>98%</h3>
					<p className='text-lg'>Approval Rate</p>
				</div>
				<div className='flex flex-col items-center mb-6 md:mb-0'>
					<h3 className='text-3xl font-bold'>100k+</h3>
					<p className='text-lg'>Processed Applications</p>
				</div>
				<div className='flex flex-col items-center'>
					<h3 className='text-3xl font-bold'>24/7</h3>
					<p className='text-lg'>Customer Support</p>
				</div>
			</div>
		</div>
	)
}
