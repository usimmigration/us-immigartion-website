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
					<h1 className='text-4xl font-semibold'>Cookies</h1>
					<h2 className='text-3xl font-medium'>
						Learn about our Cookies
					</h2>
				</Container>
			</section>
			<section className='bg-gray-100 py-10'>
				<Container className='bg-white p-5 rounded-xl'>
					<h1 className='text-4xl font-semibold mb-5'>Cookies</h1>
					<div className='space-y-2'>
						<p>
							A cookie is a text file which a web site saves on a user’s
							computer after the user visits the site. The cookie is stored by
							the user’s browser in a location reserved for cookies.
						</p>
						<p>
							A cookie saves information about the user’s visit to the web site.
							This information can include the user’s preferences regarding web
							site appearance and behavior, based on the user’s actions at that
							site. Cookies can also keep track of the number of visitors
							visiting each page at a site.
						</p>
						<p>There are two main types of cookie:</p>
						<ul>
							<li>
								<strong>Session Cookies</strong>: A session cookie is only saved
								for as the duration of the user’s visit to the web site. It
								tracks the user’s behavior during the visit, and is then
								deleted.
							</li>
							<li>
								<strong>Persistent Cookies:</strong> A persistent cookie has an
								expiration date or lifespan, which is stored as part of the
								cookie data. It expires when that date is reached or at the end
								of the lifespan. Persistent cookies can be used to store such
								things as user login information (to keep the user logged in at
								each visit), and to send information about the user’s browsing
								activity to the web site or to advertisers.
							</li>
						</ul>
						<p>
							To learn more about cookies, visit:{' '}
							<a href='https://allaboutcookies.org'>
								https://allaboutcookies.org
							</a>
						</p>
						<h2>Notice</h2>
						<p>
							We use cookies on our website to give you the most relevant
							experience by remembering your preferences and repeat visits. By
							clicking “Accept All”, you consent to the use of ALL the cookies.
							However, you may visit “More info” to provide a controlled
							consent.
						</p>
						<h2>Cookies Policy</h2>
						<ul>
							<li>
								We inform users (hereinafter, “you”) that cookies are used on
								the Website (hereinafter, “our/this Website”).
							</li>
							<li>
								The below Cookie Policy describes how this Website uses cookies
								(hereinafter, “we”).
							</li>
							<li>
								We advise users to examine this policy on a frequent basis
								because it may be updated as a result of new regulations or
								business reasons.
							</li>
						</ul>
						<h2>Why do we utilize cookies, and what are they?</h2>
						<p>
							“Cookies” are file formats that are used for a variety of reasons,
							including adjusting the Website’s layout to your device, gathering
							statistical data, enhancing your user experience, and so on.
						</p>
						<p>
							You consent to the establishment of cookies by entering and
							exploring this Website and purchasing the services offered.
						</p>
						<p>
							These include session cookies (which are automatically deleted
							when you close your browser), persistent cookies (which are stored
							on your device for a long time), owned cookies (which are sent to
							your device by our Website to collect data for our use), and
							third-party cookies (which are sent to your device by a third
							party) (service providers we have contracted, e.g., links to
							social media to reshare our content).
						</p>
						<p>
							Cookies for user login, cookies for user security, cookies for
							authentication or identity, add-on cookies, user interface
							cookies, and certain session cookies are exempt from such
							permission.
						</p>
						<p>
							Please be aware that if you modify your browser’s settings by
							deactivating the limits imposed on the storage of cookies, we will
							infer you give us your permission.
						</p>
						<p>
							Furthermore, your consent will not be necessary if the placement
							of cookies is essential to provide a service on our Website that
							you have specifically requested.
						</p>
						<p>
							Third-party cookies are subject to the Privacy and Cookies
							Policies of the third-party.
						</p>
						<p>
							We are not responsible for the content or validity of the
							third-party Policies mentioned above.
						</p>
						<p>
							<strong>
								The following cookie types may be installed in your browser by
								us:
							</strong>
						</p>
						<ul>
							<li>
								Technical cookies enable the management and operation of our
								Website, as well as its features and services, such as carry-out
								sales, payment processing, social media content sharing, and so
								on.
							</li>
							<li>
								Analytical cookies let us understand how you use our website and
								which data or services you are most interested in, so we can
								improve your overall customer experience.
							</li>
							<li>
								Advertising cookies help us improve the quality of our website’s
								adverts.
							</li>
						</ul>
						<div className='table-wrapper'>
							<table>
								<tbody>
									<tr>
										<td>
											<strong>Cookies name</strong>
										</td>
										<td>
											<strong>Supplier</strong>
										</td>
										<td>
											<strong>Category</strong>
										</td>
										<td>
											<strong>Type</strong>
										</td>
										<td>
											<strong>Storage Period</strong>
										</td>
									</tr>
									<tr>
										<td>Authorization</td>
										<td>Owned</td>
										<td>Necessary</td>
										<td>Technical</td>
										<td>Session</td>
									</tr>
									<tr>
										<td>_ga_#</td>
										<td>usimmigrationsupport.org</td>
										<td>Marketing</td>
										<td>Analytical</td>
										<td>2 years</td>
									</tr>
									<tr>
										<td>_ga</td>
										<td>usimmigrationsupport.org</td>
										<td>Marketing</td>
										<td>Analytical</td>
										<td>2 years</td>
									</tr>
									<tr>
										<td>_gcl_au</td>
										<td>usimmigrationsupport.org</td>
										<td>Marketing</td>
										<td>Analytical</td>
										<td>3 months</td>
									</tr>
									<tr>
										<td>mtm_consent_removed</td>
										<td>usimmigrationsupport.org</td>
										<td>Necessary</td>
										<td>Technical</td>
										<td>Persistent</td>
									</tr>
									<tr>
										<td>_hjTLDTest</td>
										<td>usimmigrationsupport.org</td>
										<td>Statistics</td>
										<td>Analytical</td>
										<td>Session</td>
									</tr>
									<tr>
										<td>_hjSessionUser_#</td>
										<td>usimmigrationsupport.org</td>
										<td>Statistics</td>
										<td>Analytical</td>
										<td>1 year</td>
									</tr>
									<tr>
										<td>_hjSession_#</td>
										<td>usimmigrationsupport.org</td>
										<td>Statistics</td>
										<td>Analytical</td>
										<td>30 minutes</td>
									</tr>
									<tr>
										<td>IDE</td>
										<td>doubleclick.net</td>
										<td>Marketing</td>
										<td>Analytical</td>
										<td>1 year</td>
									</tr>
									<tr>
										<td>CookieConsent</td>
										<td>usimmigrationsupport.org</td>
										<td>Necessary</td>
										<td>Technical</td>
										<td>1 year</td>
									</tr>
									<tr>
										<td>test_cookie</td>
										<td>doubleclick.net</td>
										<td>Necessary</td>
										<td>Technical</td>
										<td>15 minutes</td>
									</tr>
									<tr>
										<td>hjViewportId</td>
										<td>hotjar.com</td>
										<td>Statistics</td>
										<td>Analytical</td>
										<td>Session</td>
									</tr>
									<tr>
										<td>hjActiveViewportIds</td>
										<td>hotjar.com</td>
										<td>Statistics</td>
										<td>Analytical</td>
										<td>Session</td>
									</tr>
									<tr>
										<td>pagead/landing</td>
										<td>doubleclick.net</td>
										<td>Marketing</td>
										<td>Analytical</td>
										<td>Session</td>
									</tr>
									<tr>
										<td>pagead/1p-user-list/#</td>
										<td>google.com</td>
										<td>Marketing</td>
										<td>Analytical</td>
										<td>30 days</td>
									</tr>
									<tr>
										<td>1.gif</td>
										<td>imgsct.cookiebot.com</td>
										<td>Necessary</td>
										<td>Technical</td>
										<td>Session</td>
									</tr>
									<tr>
										<td>pagead/landing</td>
										<td>googlesyndication.com</td>
										<td>Marketing</td>
										<td>Analytical</td>
										<td>Session</td>
									</tr>
									<tr>
										<td></td>
										<td>usimmigrationsupport.org</td>
										<td></td>
										<td>Analytical</td>
										<td>Session</td>
									</tr>
								</tbody>
							</table>
						</div>
						<h2>
							What rights does the user have when it comes to blocking or
							refusing cookies?
						</h2>
						<p>
							You can revoke your permission to the placement of cookies by this
							Website at any time by changing the settings on your device’s
							browser.
						</p>
						<p>
							For the most common internet browsers, here are links to
							instructions on how to handle or erase cookies:
						</p>
						<ul>
							<li>Google Chrome</li>
							<li>Mozilla Firefox</li>
							<li>Microsoft IE and Edge</li>
							<li>Apple Safari</li>
							<li>Chrome for Android</li>
							<li>Opera</li>
						</ul>
						<p>
							Keep in mind that if you disable cookies, you will lose access to
							certain Website functions that require them.
						</p>
						<p>
							You may also set your computer browser to automatically allow or
							reject all types of cookies. You can also set your browser to
							inform you whenever a cookie is received, allowing you to choose
							whether or not to accept it.
						</p>
						<p>
							You can also enable private browsing, which prevents your browser
							from saving browsing data, website logins, cookies, and other
							information about the web pages you visit, and non-tracking
							browsing, which prevents your browser from tracking your visits
							and user patterns.
						</p>
						<p>
							If you have any questions about this Cookie Policy, please email
							us: info@usimmigrationsupport.org
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
