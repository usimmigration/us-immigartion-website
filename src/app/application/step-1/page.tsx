import EstaForm from './EstaForm'

export default async function EstaFormPage() {
	return (
		<>
			<div className='px-4'>
				<div className='bg-[#e7f2fe] rounded-xl mt-6 p-6 max-w-[1200px] mx-auto'>
					<h2 className='text-lg'>
						Important Notice Regarding United States ESTA Applications:
					</h2>
					<ul className='mt-4 list-disc list-inside'>
						<li>
							You may travel to the United States only for tourism, business, or
							transit purposes.
						</li>
						<li>Your stay must not exceed 90 days.</li>
						<li>
							Need to stay longer than 90 days? You must apply for a B1/B2 visa
							(Embassy visit required).
						</li>
						<li>
							Each application must be submitted and paid for individually.
						</li>
					</ul>
				</div>
			</div>
			<EstaForm />
		</>
	)
}
