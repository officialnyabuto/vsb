import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'

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

