import { Menu } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-6 sticky top-0 bg-blue-50 z-50">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-architects-daughter font-bold">VISION SKETCH AND BUILD</Link>
        <div className="hidden md:flex space-x-6">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#gallery">Gallery</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <button className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </nav>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-architects-daughter text-lg hover:text-blue-600 transition-colors">
      {children}
    </Link>
  )
}

