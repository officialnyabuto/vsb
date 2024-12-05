import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-gray-300">
      <h2 className="text-4xl font-bold mb-12 text-center font-architects-daughter">Get in Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4 font-architects-daughter">Contact Information</h3>
          <div className="space-y-4">
            <a 
              href="mailto:info@visionsketchandbuild.com" 
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              info@visionsketchandbuild.com
            </a>
            <a 
              href="tel:+254708728695" 
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              +254708728695
            </a>
            <a 
              href="https://maps.google.com/?q=Ufungamano+House,+State+House+Road,+Nairobi,+Kenya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Ufungamano House, State House Road, Nairobi, Kenya
            </a>
          </div>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

