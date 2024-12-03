import { Compass, Home, Building } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="py-20 border-t border-gray-300">
      <h2 className="text-4xl font-bold mb-12 text-center font-architects-daughter">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          icon={<Compass className="h-12 w-12 mb-4" />}
          title="ARCHITECTURE"
          description="We create innovative and modern structures for our clients as we guide them through the design and construction stages."
        />
        <ServiceCard
          icon={<Home className="h-12 w-12 mb-4" />}
          title="INTERIOR DESIGN"
          description="Our interior design team ensures the spaces we create are tailor-made for each project's unique requirements."
        />
        <ServiceCard
          icon={<Building className="h-12 w-12 mb-4" />}
          title="PROJECT MANAGEMENT"
          description="We help our clients coordinate the construction process, maximizing efficiency."
        />
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow sketch-border">
      {icon}
      <h3 className="text-xl font-semibold mb-2 font-architects-daughter">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

