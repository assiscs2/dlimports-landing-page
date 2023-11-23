import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FacebookPixel } from './components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DL Imports - Promoção',
  description: '',
  icons: {
    icon: './src/app/favicon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="facebook-domain-verification" content="vxn5wxk1rjf585zozcy1vtfzgmoos1" />
      </head>
      <body className={inter.className}>{children}</body>
      <FacebookPixel />
    </html>
  )
}
