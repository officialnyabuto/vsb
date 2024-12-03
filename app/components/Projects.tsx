import Image from 'next/image'

const projects = [
  {
    title: "LOW COST HOUSING APARTMENTS",
    description: "Located in Ruiru, providing affordable housing near the central business district.",
    imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    title: "VISUALISATION FOR KUMKANG",
    description: "Concept design for proposed residential apartments in Kiambu.",
    imageSrc: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc"
  },
  {
    title: "LIMURU MALL REDESIGN",
    description: "Creating a unique experience for patrons in Limuru town.",
    imageSrc: "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
  },
  {
    title: "WORLD PLASTICS MANUFACTURING PLANT",
    description: "5000m2 production plant located in Limuru, currently under construction.",
    imageSrc: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
  },
  {
    title: "RESTAURANT",
    description: "Providing company staff with a convenient dining and social location in Limuru.",
    imageSrc: "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
  },
  {
    title: "INTERIOR DESIGN - KAMULU",
    description: "Visualized interior for a 3 bedroom apartment showcasing possibilities to prospective clients.",
    imageSrc: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-gray-300">
      <h2 className="text-4xl font-bold mb-12 text-center font-architects-daughter">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ imageSrc, title, description }: { imageSrc: string; title: string; description: string }) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow sketch-border">
      <Image src={imageSrc} alt={title} width={400} height={300} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 font-architects-daughter">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}