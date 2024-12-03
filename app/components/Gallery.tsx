import Image from 'next/image'

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", alt: "Modern Kitchen Design" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", alt: "Luxury Living Room" },
  { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d", alt: "Contemporary Bedroom" },
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9", alt: "Office Space Design" },
  { src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab", alt: "Modern Building Exterior" },
  { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14", alt: "Minimalist Bathroom" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 border-t border-gray-300">
      <h2 className="text-4xl font-bold mb-12 text-center font-architects-daughter">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div key={index} className="relative h-64 sketch-border overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  )
}