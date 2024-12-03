import './globals.css'
import { Inter, Architects_Daughter, Caveat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const architectsDaughter = Architects_Daughter({ weight: '400', subsets: ['latin'], variable: '--font-architects-daughter' })
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' })

export const metadata = {
  title: 'VISION SKETCH AND BUILD - Architecture & Design Studio',
  description: 'We bring your dreams into reality. Innovative, modern structures and interior design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architectsDaughter.variable} ${caveat.variable} font-sans bg-blue-50`}>{children}</body>
    </html>
  )
}

