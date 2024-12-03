const testimonials = [
  {
    quote: "VISION SKETCH AND BUILD transformed our ideas into a stunning reality. Their attention to detail and innovative approach exceeded our expectations.",
    author: "John Doe, Homeowner"
  },
  {
    quote: "Working with this team was a pleasure. They managed our project efficiently and delivered outstanding results on time and within budget.",
    author: "Jane Smith, Business Owner"
  },
  {
    quote: "The interior design for our office space is perfect. It's both functional and inspiring, improving our work environment significantly.",
    author: "Mike Johnson, CEO"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 border-t border-gray-300">
      <h2 className="text-4xl font-bold mb-12 text-center font-architects-daughter">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg sketch-border">
            <p className="mb-4 font-caveat text-xl">&ldquo;{testimonial.quote}&rdquo;</p>
            <p className="text-right font-semibold">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

