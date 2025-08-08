import { Hero } from '@/components/home/hero'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { About } from '@/components/home/about'
import { ServicesSlider } from '@/components/home/services-slider'
import { Advantages } from '@/components/home/advantages'

export default function Home() {
	return (
		<main className='bg-white'>
			<Hero />
			<WhyChooseUs />
			<About />
			<ServicesSlider />
			<Advantages />
		</main>
	)
}
