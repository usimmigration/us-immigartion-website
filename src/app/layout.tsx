import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Providers } from './providers'
import { Toaster } from 'sonner'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
	title: 'U.S. Immigration Support',
	description: 'U.S. Immigration Support',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<Toaster />
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
