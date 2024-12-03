import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-20 grid-bg relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6 font-architects-daughter">We bring your dreams into reality</h1>
        <p className="text-xl mb-8">Architecture & Design Studio</p>
        <Link 
          href="#projects" 
          className="inline-flex items-center px-6 py-3 border border-gray-800 rounded-full text-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors"
        >
          Explore Our Projects
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="black" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </section>
  )
}

