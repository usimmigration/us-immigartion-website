'use client'

import Link from 'next/link'
import { Container } from './container'
import { Logo } from '../ui/logo'

export function Footer() {
	return (
		<footer className='bg-[#1A396F] text-white pt-12 pb-8'>
			<Container className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				<div>
					<Link href='/' className='inline-block mb-4'>
						<Logo className='w-[220px]' variant='white' />
					</Link>
					<p className='text-sm text-white/80 max-w-xs'>
						Helping international travelers navigate U.S. visa applications with
						clarity and confidence.
					</p>
				</div>

				{/* Navigation */}
				<div className='md:col-span-1'>
					<h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
					<ul className='space-y-2 text-sm'>
						<li>
							<Link
								href='/'
								className='hover:underline underline-offset-4 hover:text-white transition'
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href='/application'
								className='hover:underline underline-offset-4 hover:text-white transition'
							>
								Application
							</Link>
						</li>
						<li>
							<Link
								href='/contacts'
								className='hover:underline underline-offset-4 hover:text-white transition'
							>
								Contacts
							</Link>
						</li>
						<li>
							<Link
								href='/about'
								className='hover:underline underline-offset-4 hover:text-white transition'
							>
								About Us
							</Link>
						</li>
					</ul>
				</div>

				{/* Contact / Support */}
				<div>
					<h4 className='text-lg font-semibold mb-4'>Support</h4>
					<ul className='text-sm space-y-2'>
						<li>Available 24/7</li>
						<li>U.S. Based Team</li>
					</ul>
				</div>
			</Container>

			<Container className='mt-10'>
				<ul className='flex items-center gap-5 text-sm max-sm:flex-col'>
					<li>
						<Link
							href='/about'
							className='hover:underline underline-offset-4 hover:text-white transition'
						>
							About Us
						</Link>
					</li>
					<li>
						<Link
							href='/legal-disclaimer'
							className='hover:underline underline-offset-4 hover:text-white transition'
						>
							Legal Disclaimer
						</Link>
					</li>
					<li>
						<Link
							href='/terms-conditions'
							className='hover:underline underline-offset-4 hover:text-white transition'
						>
							Terms & Conditions
						</Link>
					</li>
					<li>
						<Link
							href='/privacy-policy'
							className='hover:underline underline-offset-4 hover:text-white transition'
						>
							Privacy Policy
						</Link>
					</li>

					<li>
						<Link
							href='/refund-policy'
							className='hover:underline underline-offset-4 hover:text-white transition'
						>
							Refund Policy
						</Link>
					</li>
					<li>
						<Link
							href='/cookies'
							className='hover:underline underline-offset-4 hover:text-white transition'
						>
							Cookies
						</Link>
					</li>
					<li>
						<Link
							href='/contacts'
							className='hover:underline underline-offset-4 hover:text-white transition'
						>
							Contacts
						</Link>
					</li>
				</ul>
			</Container>

			<hr className='my-8 border-white/20' />

			<Container className='text-center text-xs text-white/50'>
				&copy; {new Date().getFullYear()} U.S. Immigration Support. All rights
				reserved.
			</Container>
		</footer>
	)
}
