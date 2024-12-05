import './globals.css'
import { Inter, Architects_Daughter, Caveat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const architectsDaughter = Architects_Daughter({ weight: '400', subsets: ['latin'], variable: '--font-architects-daughter' })
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' })

export const metadata = {
  metadataBase: new URL('https://visionsketchandbuild.com'),
  title: 'VISION SKETCH AND BUILD - Architecture & Design Studio',
  description: 'We bring your dreams into reality. Innovative, modern structures and interior design.',
  keywords: ['architecture', 'design', 'interior design', 'construction', 'kenya', 'nairobi'],
  openGraph: {
    title: 'VISION SKETCH AND BUILD',
    description: 'Architecture & Design Studio in Nairobi, Kenya',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                // Basic performance metrics
                let timing = window.performance.timing;
                let loadTime = timing.loadEventEnd - timing.navigationStart;
                console.log('Page load time:', loadTime);
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${architectsDaughter.variable} ${caveat.variable} font-sans bg-blue-50`}>{children}</body>
    </html>
  )
}

