'use client'

import { useDelete } from '@/hooks/useApplication'

export default function PaymentPage() {
	const { mutateAsync, isPending } = useDelete()
	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='bg-white rounded-lg shadow overflow-hidden'>
					<div className='px-6 py-8'>
						<h2 className='text-2xl font-bold text-gray-900 text-center'>
							ESTA Application Processing
						</h2>
						<div className='mt-8'>
							<div className='flex items-center justify-between border-t border-gray-200 pt-6'>
								<div>
									<h3 className='text-lg font-medium text-gray-900'>
										Order Summary
									</h3>
									<p className='mt-1 text-sm text-gray-500'>
										ESTA Application Processing Fee
									</p>
								</div>
								<div className='text-right'>
									<p className='text-lg font-medium text-gray-900'>$139.00</p>
									<p className='mt-1 text-sm text-gray-500'>USD</p>
								</div>
							</div>

							<div className='mt-10'>
								<div className='rounded-md bg-blue-50 p-4'>
									<div className='flex'>
										<div className='flex-shrink-0'>
											<svg
												className='h-5 w-5 text-blue-400'
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 20 20'
												fill='currentColor'
											>
												<path
													fillRule='evenodd'
													d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
													clipRule='evenodd'
												/>
											</svg>
										</div>
										<div className='ml-3'>
											<h3 className='text-sm font-medium text-blue-800'>
												Processing Information
											</h3>
											<div className='mt-2 text-sm text-blue-700'>
												<p>
													Your application will be processed after successful
													payment.
												</p>
												<p className='mt-1'>
													You will receive a confirmation email with further
													instructions.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='mt-10 space-y-4'>
								<button
									type='button'
									onClick={() => {
										const paymentLink = sessionStorage.getItem('paymentLink')
										if (paymentLink) {
											window.location.href = paymentLink
										}
									}}
									className='w-full bg-blue-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
								>
									Proceed to Payment
								</button>
								<button
									type='button'
									onClick={async () => {
										await mutateAsync(sessionStorage.getItem('applicationId')!)
										sessionStorage.removeItem('paymentLink')
										sessionStorage.removeItem('applicationId')
										window.location.href = '/application/step-1'
									}}
									className='w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
								>
									Reapply
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
