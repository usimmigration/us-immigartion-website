'use client'

import { ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
	return (
		<section className='relative w-full h-[90vh] flex items-center justify-center overflow-hidden'>
			<Image
				src='https://images.unsplash.com/photo-1582173690657-dbeb6b23e900?q=80&w=870'
				alt='Hero Background'
				layout='fill'
				objectFit='cover'
				priority
				className='absolute top-0 left-0 z-0 opacity-20'
			/>
			<div className='relative z-10 text-center max-w-4xl px-6'>
				<h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 mb-6'>
					Helping You Apply <br className='hidden md:inline' /> for the Right
					U.S. Travel Authorization
				</h1>
				<p className='text-lg md:text-xl text-blue-800 font-medium mb-2'>
					Trusted by over 100,000 travelers
				</p>
				<p className='text-md md:text-lg text-blue-700 mb-8'>
					We help you apply for the right travel authorization,
					<br />
					with expert support and fast results.
				</p>
				<Link
					href='/application'
					className='inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-full shadow-lg transition'
				>
					Apply<span className='hidden md:inline'>with Expert Help</span>
					<ChevronRightIcon color='white' />
				</Link>
			</div>
		</section>
	)
}
