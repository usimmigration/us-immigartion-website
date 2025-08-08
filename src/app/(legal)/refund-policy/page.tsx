import { Container } from '@/components/layout/container'

export default function Page() {
	return (
		<main>
			<section
				style={{
					background: 'url("/legal-bg.webp") no-repeat center top / cover',
				}}
			>
				<Container className='text-white space-y-2 py-40'>
					<h1 className='text-4xl font-semibold'>Refund Policy</h1>
					<h2 className='text-3xl font-medium'>
						Learn about our Refund Policy
					</h2>
				</Container>
			</section>
			<section className='bg-gray-100 py-10'>
				<Container className='bg-white p-5 rounded-xl'>
					<h1 className='text-4xl font-semibold mb-5'>Refund Policy</h1>
					<div className='space-y-2'>
						<p>
							<strong>Your Right to Withdraw</strong>
						</p>
						<p>
							You may request a refund if you are not satisfied with the service
							we provide. Under the terms of our refund policy, we offer a
							90-day money-back guarantee. To exercise this right, you must
							email our customer service team and formally inform us in writing
							of your intention to withdraw from the contract.
						</p>
						<p>
							<strong>The Result of Withdrawal</strong>
						</p>
						<p>
							If you choose to withdraw from this contract, we will reimburse
							all payments made. Refunds will be issued to the same debit or
							credit card used for the original payment.
						</p>
						<p>
							<strong>Withdrawal Information</strong>
						</p>
						<p>
							When submitting your written withdrawal request via email to{' '}
							<a href='mailto:info@usimmigrationsupport.org'>
								info@usimmigrationsupport.org
							</a>{' '}
							, please include the following details:
						</p>
						<ul>
							<li>The reason for requesting the refund</li>
							<li>
								Your order number (included in the email confirmation of your
								order)
							</li>
							<li>
								Your name as it appeared in the billing information provided
							</li>
						</ul>
						<p>
							<strong>Currency</strong>
						</p>
						<p>
							All transactions are conducted in United States dollars (USD).
							Refunds will be issued in USD and processed within two working
							days of receiving your written request to withdraw from the
							contract. Please note that once the refund is issued, your bank or
							credit card company may convert it to your local currency. You
							will receive the same USD amount that was charged initially.
						</p>
						<p>
							<strong>Addendum</strong>
						</p>
						<p>
							ETAS Travel LLC is a private company and is not affiliated with
							any government agency. Submitting your application through our
							website, canceling the application, or requesting a refund will
							not impact the final decision on whether your application is
							approved or denied by government authorities. Additionally, the
							final discretion to grant or deny admission into the United States
							lies solely with the customs officer at the port of entry.
						</p>
						<p>
							<strong>Last updated:</strong> July 11, 2025
						</p>
					</div>
				</Container>
			</section>
		</main>
	)
}
