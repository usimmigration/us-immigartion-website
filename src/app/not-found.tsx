import Link from 'next/link'

export default function NotFound() {
	return (
		<section className='py-20 flex flex-col items-center gap-6'>
			<h1 className='font-black text-7xl text-[#1A396F]'>404</h1>
			<h2 className='text-center text-[#1A396F] text-3xl font-bold'>
				Page Not Found
			</h2>
			<p className='text-center max-w-2xl px-2'>
				The page you’re trying to access doesn’t exist. Please use the menu
				links or the search bar at the top to locate what you’re looking for.
				Alternatively, you can submit a request through our{' '}
				<Link href='https://www.usimmigrationsupport.org/contact/'>
					contact page
				</Link>
				, and we’ll respond as soon as possible.
			</p>
			<div className='mx-auto flex items-center justify-center'>
				<p>
					<a
						href='/contact'
						className='text-[#1A396F] hover:underline underline-offset-4'
					>
						Report a broken link
					</a>{' '}
					|{' '}
					<a
						href='/'
						className='text-[#1A396F] hover:underline underline-offset-4'
					>
						Go to Home Page
					</a>
				</p>
			</div>
		</section>
	)
}
