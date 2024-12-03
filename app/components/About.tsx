import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 font-architects-daughter">About Us</h2>
          <p className="mb-4">
            At VISION SKETCH AND BUILD, we are dedicated to creating inspiring, sustainable spaces that enhance lives and leave a lasting impact through innovative design and collaboration.
          </p>
          <p className="mb-4">
            Our team of experienced architects and designers work closely with clients to bring their visions to life, guiding them through every stage of the design and construction process.
          </p>
          <p>
            We believe in the power of architecture to transform communities and improve quality of life. Our commitment to sustainability and innovation drives us to create spaces that are not only beautiful but also functional and environmentally responsible.
          </p>
        </div>
        <div className="relative h-96 sketch-border">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="VISION SKETCH AND BUILD Team"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}