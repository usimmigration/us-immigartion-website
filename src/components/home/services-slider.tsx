'use client'

import Link from 'next/link'

export function ServicesSlider() {
	return (
		<section className='bg-white py-24'>
			<div className='container mx-auto px-4 text-center'>
				<h2 className='text-3xl font-bold text-blue-900 mb-4'>
					Our Most Requested Services
				</h2>
				<p className='text-gray-600 mb-12 max-w-2xl mx-auto'>
					We specialize in assisting international travelers with U.S. visa
					applications — including ESTA, Tourist Visas, and Renewals. Our
					experts help simplify the process so you can focus on planning your
					trip.
				</p>

				<div
					className='
            gap-8
            flex flex-col
						md:grid
            md:grid-cols-[repeat(2,_minmax(0,_1fr))]
            md:grid-rows-[auto_auto]
            md:grid-flow-col
          '
					style={{
						gridTemplateAreas: `
              "block1 block2"
              "block3 block3"
            `,
					}}
				>
					{/* ESTA */}
					<div
						className='bg-blue-50 p-6 rounded-lg shadow-md h-full flex flex-col justify-between'
						style={{ gridArea: 'block1' }}
					>
						<img src='/flag-us.svg' alt='Flag US' className='h-10 mb-4' />
						<h3 className='text-xl font-semibold text-blue-900 mb-2'>
							ESTA Processing
						</h3>
						<p className='text-gray-700 mb-4'>
							For travelers from Visa Waiver countries. Fast online approval, no
							embassy visit required.
						</p>
						<div className='flex justify-between items-center mt-auto'>
							<div>
								<p className='font-bold text-blue-800'>USD $139</p>
								<p className='text-sm text-gray-500'>*Including fees</p>
							</div>
							<Link
								href='/application'
								className='inline-block px-4 py-2 bg-blue-700 text-white rounded-full text-sm font-semibold hover:bg-blue-800 transition'
							>
								Apply now
							</Link>
						</div>
					</div>

					{/* Tourist Visa */}
					<div
						className='bg-blue-50 p-6 rounded-lg shadow-md h-full flex flex-col justify-between'
						style={{ gridArea: 'block2' }}
					>
						<h3 className='text-xl font-semibold text-blue-900 mb-2'>
							Don’t Qualify for ESTA?
							<br /> Tourist Visa (B2)
						</h3>
						<p className='text-gray-700 mb-4'>
							The B2 Visitor Visa is for travelers not eligible for ESTA. It
							requires an interview, wait time, and more documentation.
						</p>
						<Link
							href='/b2-visa/'
							className='mt-auto inline-block px-6 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition'
						>
							B2 Tourist Visa
						</Link>
					</div>

					{/* Visa Renewal */}
					<div
						className='bg-blue-50 p-6 rounded-lg shadow-md h-full flex flex-col justify-between'
						style={{ gridArea: 'block3' }}
					>
						<h3 className='text-xl font-semibold text-blue-900 mb-2'>
							What if I had a visa before?
						</h3>
						<p className='text-gray-700 mb-4'>
							You may be able to renew your visa. In most cases, DS-160 form is
							still required, sometimes even an interview.
						</p>
						<Link
							href='/visa-waiver-program/'
							className='mt-auto inline-block px-6 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition'
						>
							See if ESTA Works for You
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
