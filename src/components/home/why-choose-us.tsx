import { CheckCircle2Icon } from 'lucide-react'

export function WhyChooseUs() {
	return (
		<section className='bg-white py-24'>
			<div className='container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center'>
				<div>
					<h2 className='text-3xl font-bold mb-4'>Why Choose Us</h2>
					<p className='text-gray-600 mb-4'>
						Fast approval. No approval, no charge.
					</p>
					<ul className='space-y-3 text-[#1A396F] font-medium '>
						<li className='flex items-center gap-2'>
							<CheckCircle2Icon /> Same Day Processing
						</li>
						<li className='flex items-center gap-2'>
							<CheckCircle2Icon />
							100% Money Back Guarantee
						</li>
						<li className='flex items-center gap-2'>
							<CheckCircle2Icon /> If you are not approved, you will not be
							charged
						</li>
					</ul>
				</div>
				<div>
					<h2 className='text-3xl font-bold mb-4'>
						Why Travelers Trust Our Visa Support Services
					</h2>
					<p className='text-gray-600 mb-6'>
						We help you apply online with expert assistance, secure processing,
						and a 100% money-back guarantee.
					</p>
					<div className='flex justify-around items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-8'>
						<img src='trustpilot.png' alt='Trustpilot' className='h-12' />
						<img src='trusteds.png' alt='Trusted' className='h-12' />
						<img src='/gdpr.png' alt='GDPR' className='h-12' />
					</div>
				</div>
			</div>
		</section>
	)
}
