'use client'

import { Container } from '@/components/layout/container'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
	return (
		<main id='page-about' className='pb-12'>
			<section
				className='mb-12'
				style={{
					background: 'url("/legal-bg.webp") no-repeat center top / cover',
				}}
			>
				<Container className='text-white space-y-2 py-40'>
					<h1 className='text-4xl font-semibold'>About us</h1>
				</Container>
			</section>
			<Container>
				{/* Top Section */}
				<section id='section-top' className='pb-8'>
					<div className='content-top'>
						<p>
							This website is owned and operated by ETAS Travel LLC, a private
							company specializing in eVisa processing.
						</p>
						<p>
							Our team is dedicated to assisting international travelers with
							applying for Electronic Visas and Travel Authorizations. We are
							not affiliated with any government authority; however, we simplify
							official application processes through expert support and secure
							online tools.
						</p>
						<p>
							Please submit the online form on the{' '}
							<Link
								href='/contact'
								className='text-blue-600 underline hover:text-blue-800'
							>
								Contact page
							</Link>
							, and we will get back to you within 24 hours.
						</p>
					</div>

					{/* Company Address */}
					<div className='content-bottom my-8'>
						<div className='wrapper flex flex-col md:flex-row p-6 rounded-lg shadow-sm border border-[#e5e7eb] '>
							<div className='md:w-2/3 flex'>
								<Image
									src='https://www.usimmigrationsupport.org/wp-content/themes/USISORG-V4/theme/assets/images/about-us/company-icon.svg'
									alt='ETAS TRAVEL'
									width={60}
									height={60}
									className='my-auto'
								/>
								<div className='address ms-6 my-auto'>
									<p className='font-bold mb-2'>Company address:</p>
									<p>
										ETAS Travel LLC
										<br />
										2118 Guava Street, Belama Phase I<br />
										Belize City, Belize
										<br />
										Identification Number: IFSC/200/LLC 1704/23
									</p>
								</div>
							</div>

							<div className='hidden md:block md:w-1/3 text-end my-auto'>
								<Image
									src='https://www.usimmigrationsupport.org/wp-content/themes/USISORG-V4/theme/assets/images/about-us/address-img.png'
									alt='Plane'
									width={160}
									height={160}
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Accreditations Section */}
				<section id='about-accreditations' className='mb-24'>
					<h2 className='text-2xl font-semibold mb-8'>Our Accreditations</h2>

					<div className='grid md:grid-cols-2 gap-6'>
						{/* Accreditation Item */}
						<AccreditationCard
							flagSrc='https://www.usimmigrationsupport.org/wp-content/themes/USISORG-V4/theme/assets/images/about-us/flag-us.svg'
							title='American Society of Travel Advisors'
							description={
								<>
									ETAS Travel LLC is a member of ASTA, the American Society of
									Travel Advisors, registration number{' '}
									<a
										href='https://www.asta.org/membership/directory-search-details?memId=900387792'
										target='_blank'
										rel='noopener noreferrer'
										className='text-blue-600 underline hover:text-blue-800'
									>
										900387792
									</a>
									.
								</>
							}
						/>

						<AccreditationCard
							flagSrc='https://www.usimmigrationsupport.org/wp-content/themes/USISORG-V4/theme/assets/images/about-us/flag-nz.svg'
							title='Immigration Advisers Authority Certification'
							description={
								<>
									ETAS Travel LLC is registered with the New Zealand Immigration
									Advisers Authority under registration number{' '}
									<a
										href='https://www.iaa.govt.nz/'
										target='_blank'
										rel='noopener noreferrer'
										className='text-blue-600 underline hover:text-blue-800'
									>
										201503055
									</a>
									.
								</>
							}
						/>

						<AccreditationCard
							flagSrc='https://www.usimmigrationsupport.org/wp-content/themes/USISORG-V4/theme/assets/images/about-us/flag-au.svg'
							title='Migration Agents Registration Authority'
							description={
								<>
									ETAS Travel LLC, through its Australian advisor, is authorized
									by the Department of Home Affairs (registration{' '}
									<a
										href='https://portal.mara.gov.au/search-the-register-of-migration-agents/register-of-migration-agent-details/?ContactID=1d67a0d6-7511-e411-9402-005056ab0eca'
										target='_blank'
										rel='noopener noreferrer'
										className='text-blue-600 underline hover:text-blue-800'
									>
										1466320
									</a>
									).
								</>
							}
						/>

						<AccreditationCard
							flagSrc='https://www.usimmigrationsupport.org/wp-content/themes/USISORG-V4/theme/assets/images/about-us/flag-bz.svg'
							title='Chamber of Commerce'
							description={
								<>
									ETAS Travel LLC is a registered member (
									<a
										href='https://www.belize.org/members/etas-travel-llc/'
										target='_blank'
										rel='noopener noreferrer'
										className='text-blue-600 underline hover:text-blue-800'
									>
										7380
									</a>
									) of the Belize Chamber of Commerce and Industry.
								</>
							}
						/>
					</div>
				</section>

				{/* Services Section */}
				<section
					id='section-about-services'
					className='grid md:grid-cols-2 gap-12'
				>
					<div>
						<h2 className='text-2xl font-semibold mb-4'>
							Our services include:
						</h2>
						<p className='mb-6'>
							We specialize in assisting international travelers with United
							States Electronic System for Travel Authorization (ESTA)
							applications...
						</p>
						<Image
							src='https://www.usimmigrationsupport.org/wp-content/themes/USISORG-V4/theme/assets/images/about-us/services-about.png'
							alt='Services'
							width={640}
							height={360}
							className='w-full'
						/>
					</div>

					<div className='space-y-3'>
						{[
							'Application assistance for travelers visiting the USA',
							'Same-day processing',
							'All data is encrypted and processed securely.',
							'Real-time status updates on your application',
							'Multilingual 24/7 customer support',
							'ESTA confirmation securely delivered by email',
						].map((item, idx) => (
							<p
								key={idx}
								className='bg-green-100 text-green-800 px-4 py-2 rounded'
							>
								✅ {item}
							</p>
						))}
					</div>
				</section>
			</Container>
		</main>
	)
}

function AccreditationCard({
	flagSrc,
	title,
	description,
}: {
	flagSrc: string
	title: string
	description: React.ReactNode
}) {
	return (
		<div className='wrapper p-6 border border-[#e5e7eb] rounded-lg shadow-sm'>
			<div className='heading flex items-center mb-3'>
				<Image src={flagSrc} alt={title} width={24} height={24} />
				<p className='ms-3 font-bold'>{title}</p>
			</div>
			<div className='content text-sm text-gray-800'>{description}</div>
		</div>
	)
}
