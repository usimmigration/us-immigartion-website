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
					<h1 className='text-4xl font-semibold'>Legal Disclaimer</h1>
					<h2 className='text-3xl font-medium'>Learn about our Legal terms</h2>
				</Container>
			</section>
			<section className='bg-gray-100 py-10'>
				<Container className='bg-white p-5 rounded-xl'>
					<h1 className='text-4xl font-semibold mb-5'>Legal Disclaimer</h1>
					<div className='space-y-3'>
						<p>
							This website is owned and operated by ETAS Travel LLC, a private
							company. This website and ETAS Travel LLC are not affiliated with
							any government agency.
						</p>
						<p>
							Our mission is to help immigrants and travelers through the
							complex United States immigration system with our do-it-yourself
							immigration guides and travel authorization consultancy.
						</p>
						<p>
							All applicants can apply directly at uscis.gov or travel.state.gov
							without our assistance. Using this website does not establish an
							attorney-client relationship.
						</p>
						<p>
							The policies regarding travel documents are determined by the
							issuing authority, outlining the requirements for foreign
							nationals to travel to, enter, and stay in another country.
						</p>
						<p>
							All information provided must be accurate, as travel documents can
							be revoked by the issuing authority for various reasons. Knowingly
							providing false information may result in penalties.
						</p>
						<p>
							The listed prices for application assistance services may include
							government fees. Reviews on the website reflect past experiences
							and are not indicative of individual results.
						</p>
						<p>
							Information on immigration matters provided on the website is for
							general informational purposes only and should not be considered
							legal advice. Users should consult with a lawyer for specific
							legal issues if needed.
						</p>
						<p>
							While efforts are made to keep the website accurate and
							up-to-date, we do not ensure the completeness or accuracy of the
							information provided. The website may experience temporary
							unavailability due to technical issues beyond its control.
						</p>
						<p>
							ETAS TRAVEL LLC is not liable for materials, products, or services
							on external websites linked to or from their site. Users agree to
							the disclaimers and legal terms by visiting this website.
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
