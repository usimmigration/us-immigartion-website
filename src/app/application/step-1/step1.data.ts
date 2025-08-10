export const countries = [
	{ code: 'USA', name: 'UNITED STATES (USA)', prefix: '+1' },
	{ code: 'UKR', name: 'UKRAINE (UKR)', prefix: '+380' },
	{ code: 'CAN', name: 'CANADA (CAN)', prefix: '+1' },
	{ code: 'DEU', name: 'GERMANY (DEU)', prefix: '+49' },
	{ code: 'FRA', name: 'FRANCE (FRA)', prefix: '+33' },
]

export const phoneTypes = ['Mobile', 'Home', 'Work', 'Other']

export const days = Array.from({ length: 31 }, (_, i) =>
	(i + 1).toString().padStart(2, '0')
)
export const months = [
	{ value: '01', label: 'January' },
	{ value: '02', label: 'February' },
	{ value: '03', label: 'March' },
	{ value: '04', label: 'April' },
	{ value: '05', label: 'May' },
	{ value: '06', label: 'June' },
	{ value: '07', label: 'July' },
	{ value: '08', label: 'August' },
	{ value: '09', label: 'September' },
	{ value: '10', label: 'October' },
	{ value: '11', label: 'November' },
	{ value: '12', label: 'December' },
]
export const yearsDob = Array.from({ length: 120 }, (_, i) =>
	(new Date().getFullYear() - i).toString()
)
export const yearsPassportIssue = Array.from({ length: 20 }, (_, i) =>
	(new Date().getFullYear() - i).toString()
)
export const yearsPassportExpiry = Array.from({ length: 15 }, (_, i) =>
	(new Date().getFullYear() + i).toString()
)

export const mandatoryQuestions = {
	a: `Do you have a physical or mental disorder; or are you a drug abuser or addict; or do you currently have any of the following diseases (communicable diseases are specified pursuant to section 361(b) of the “Public Health Service Act)”:
Cholera
Diphtheria
Tuberculosis, infectious
Plague
Smallpox
Yellow Fever
Viral Hemorrhagic Fevers, including Ebola, Lassa, Marburg, Crimean-Congo
Severe acute respiratory illnesses capable of transmission to other persons and likely to cause mortality.`,
	b: 'Have you ever been arrested or convicted for a crime that resulted in serious damage to property, or serious harm to another person or government authority?',
	c: 'Have you ever violated any law related to possessing, using, or distributing illegal drugs?',
	d: 'Do you seek to engage in or have you ever engaged in terrorist activities, espionage, sabotage, or genocide?',
	e: 'Have you ever committed fraud or misrepresented yourself or others to obtain, or assist others to obtain, a visa or entry into the United States?',
	f: "Are you currently seeking employment in the United States or were you previously employed in the United States without prior permission from the U.S. government?",
	g: "Have you ever been denied a U.S. visa you applied for with your current or previous passport, or have you ever been refused admission to the United States or withdrawn your application for admission at a U.S. port of entry?",
	h: "Have you ever stayed in the United States longer than the admission period granted to you by the U.S. government?",
	i: "Have you traveled to, or been present in Iraq, North Korea, Syria, Iran, Sudan, Libya, Somalia or Yemen on or after March 1, 2011?",
	j: "Have you traveled to, or been present in Cuba on or after March 1, 2011?"
}
