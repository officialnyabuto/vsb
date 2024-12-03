import Image from 'next/image'

const partners = [
  "Spacebar Creatives",
  "No Limit Contractors",
  "Allied Decorative Solutions",
  "Dantech Contractors",
  "Nyota Njema Real Estate"
]

export default function Partners() {
  return (
    <section className="py-20 border-t border-gray-300">
      <h2 className="text-4xl font-bold mb-12 text-center font-architects-daughter">Our Partners</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {partners.map((partner, index) => (
          <div key={index} className="text-center">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-2 sketch-border">
              <Image
                src={`https://images.unsplash.com/photo-160057${index + 1}687644-aac4c3eac7f4`}
                alt={partner}
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <p className="font-architects-daughter">{partner}</p>
          </div>
        ))}
      </div>
    </section>
  )
}