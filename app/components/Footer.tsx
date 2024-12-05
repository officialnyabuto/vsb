export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-300 text-center">
      <p className="font-architects-daughter">
        © 2023 Vision Sketch and Build. All rights reserved.
      </p>
      <p className="mt-2 text-sm">
        Designed by{' '}
        <a 
          href="https://spacebarcreatives.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          SpaceBar Creatives
        </a>
      </p>
    </footer>
  )
}

