import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-gray-300">
      <h2 className="text-4xl font-bold mb-12 text-center font-architects-daughter">Get in Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4 font-architects-daughter">Contact Information</h3>
          <div className="space-y-4">
            <p className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              info@visionsketchandbuild.com
            </p>
            <p className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              +254708728695
            </p>
            <p className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Ufungamano House, State House Road, Nairobi, Kenya
            </p>
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

