import Link from 'next/link'

export default function SuccessPage() {
	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='bg-white rounded-lg shadow overflow-hidden'>
					<div className='px-6 py-8 text-center'>
						<div className='mb-6'>
							<div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100'>
								<svg
									className='h-6 w-6 text-green-600'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M5 13l4 4L19 7'
									></path>
								</svg>
							</div>
						</div>
						<h2 className='text-2xl font-bold text-gray-900 mb-4'>
							Payment Successful!
						</h2>
						<p className='text-lg text-gray-600 mb-8'>
							Thank you for submitting your ESTA application. We have received
							your payment and your application is being processed.
						</p>
						<div className='bg-blue-50 p-4 rounded-md mb-8'>
							<div className='text-sm text-blue-700'>
								<p className='font-medium mb-2'>What happens next?</p>
								<ul className='list-disc list-inside space-y-2'>
									<li>
										You will receive a confirmation email with your application
										details
									</li>
									<li>
										Our team will review your application within the next 24-72
										hours
									</li>
									<li>
										You will be notified via email once your ESTA application
										has been processed
									</li>
								</ul>
							</div>
						</div>
						<div className='space-y-4'>
							<Link
								href='/'
								className='inline-block w-full bg-blue-600 text-white rounded-md py-3 px-4 text-base font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
							>
								Return to Home
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
