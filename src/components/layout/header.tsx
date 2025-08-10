'use client'

import Link from 'next/link'
import { Container } from './container'
import { Logo } from '../ui/logo'
import { useState } from 'react'

function HeaderNav({ className }: { className?: string }) {
	return (
		<nav className={className}>
			<ul className='flex items-center gap-6'>
				<li className='hover:text-[#1A396F] hover:underline underline-offset-4 transition-colors duration-300'>
					<Link href='/'>Home</Link>
				</li>
				<li className='hover:text-[#1A396F] hover:underline underline-offset-4 transition-colors duration-300'>
					<Link href='/application'>Application</Link>
				</li>
				<li className='hover:text-[#1A396F] hover:underline underline-offset-4 transition-colors duration-300'>
					<Link href='/contacts'>Contacts</Link>
				</li>
				<li className='hover:text-[#1A396F] hover:underline underline-offset-4 transition-colors duration-300'>
					<Link href='/about'>About Us</Link>
				</li>
			</ul>
		</nav>
	)
}

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	return (
		<header className='py-6'>
			<Container className='flex items-center justify-between gap-6'>
				<Link href='/'>
					<Logo className='max-sm:w-[240px]' />
				</Link>
				<HeaderNav className='max-md:hidden' />

				{/* Burger Menu Button */}
				<button
					className='md:hidden p-2'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label='Toggle menu'
				>
					<div className='w-6 h-5 flex flex-col justify-between'>
						<span
							className={`w-full h-0.5 bg-[#1A396F] transition-all duration-300 ${
								isMenuOpen ? 'rotate-45 translate-y-2' : ''
							}`}
						/>
						<span
							className={`w-full h-0.5 bg-[#1A396F] transition-all duration-300 ${
								isMenuOpen ? 'opacity-0' : ''
							}`}
						/>
						<span
							className={`w-full h-0.5 bg-[#1A396F] transition-all duration-300 ${
								isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
							}`}
						/>
					</div>
				</button>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className='fixed inset-0 top-[88px] w-full bg-white z-50 md:hidden overflow-hidden py-5'>
						<Container className='w-full'>
							<HeaderNav className='[&_ul]:flex-col' />
						</Container>
					</div>
				)}
			</Container>
		</header>
	)
}
