import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import dynamic from 'next/dynamic'
import Footer from './components/Footer'

// Lazy load components that are below the fold
const Gallery = dynamic(() => import('./components/Gallery'))
const Testimonials = dynamic(() => import('./components/Testimonials'))
const Partners = dynamic(() => import('./components/Partners'))
const Contact = dynamic(() => import('./components/Contact'))

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Hero />
        <Services />
        <Projects />
        <About />
        <Gallery />
        <Testimonials />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

