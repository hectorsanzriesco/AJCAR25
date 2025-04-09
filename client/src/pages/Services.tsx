import { Helmet } from "react-helmet";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  return (
    <main className="pt-20">
      <Helmet>
        <title>Servicios - AJ CAR 25</title>
        <meta name="description" content="Servicios profesionales de chapa y pintura para tu vehículo" />
      </Helmet>
      
      {/* Services Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Ofrecemos una gama completa de servicios de chapa y pintura con la máxima calidad y profesionalidad.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Listing */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              ¿Por qué elegir nuestros servicios?
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Profesionales Cualificados</h3>
                <p className="text-gray-700">
                  Nuestro equipo está formado por profesionales con años de experiencia en el sector de la reparación automotriz, garantizando un trabajo de alta calidad.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Tecnología Avanzada</h3>
                <p className="text-gray-700">
                  Utilizamos las últimas tecnologías y equipamientos para diagnosticar y reparar tu vehículo con precisión y eficiencia.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Materiales de Primera Calidad</h3>
                <p className="text-gray-700">
                  Trabajamos solo con productos y materiales de las mejores marcas para garantizar un acabado perfecto y duradero en todas nuestras reparaciones.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Garantía en Todos los Trabajos</h3>
                <p className="text-gray-700">
                  Ofrecemos garantía en todos nuestros servicios, porque confiamos en la calidad de nuestro trabajo y queremos que tú también lo hagas.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-bold"
                asChild
              >
                <Link href="/contact">SOLICITAR PRESUPUESTO</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
