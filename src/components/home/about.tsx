import Link from 'next/link'

export function About() {
	return (
		<section className='bg-blue-50 py-24'>
			<div className='container mx-auto px-4 grid md:grid-cols-2 gap-16 items-start h-min'>
				<div className='h-full flex flex-col items-start'>
					<h2 className='text-3xl font-bold mb-4'>About Us</h2>
					<p className='text-gray-700 mb-6 leading-relaxed'>
						ETAS Travel LLC is a private company specializing in eVisa
						processing. Our team is dedicated to assisting international
						travelers with applying for Electronic Travel Authorizations. We are
						not affiliated with any government authority; however, we simplify
						official application processes through expert support and secure
						online tools.
					</p>
					<Link
						href='/about'
						className='inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition justify-self-end mt-auto'
					>
						Learn more
					</Link>
				</div>
				<div className='h-full flex flex-col items-start'>
					<h2 className='text-3xl font-bold mb-4'>Accreditations</h2>
					<p className='text-gray-700 mb-6 leading-relaxed'>
						ETAS Travel LLC is registered with the New Zealand Immigration
						Advisers Authority (registration 201503055), with the Australian
						Migration Agents Registration Authority (registration 1466320) and a
						member of the American Society of Travel Advisors (member
						900387792).
					</p>
					<Link
						href='/about'
						className='inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition justify-self-end mt-auto'
					>
						Learn more
					</Link>
				</div>
			</div>
		</section>
	)
}
