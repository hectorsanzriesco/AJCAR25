import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ServiceCard from "@/components/ServiceCard";
import GalleryItem from "@/components/GalleryItem";
import Testimonial from "@/components/Testimonial";
import { services, galleryItems, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* Services Section */}
      <section id="servicios" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales para la reparación y el mantenimiento de la carrocería de tu vehículo.
            </p>
          </div>
          
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
      
      {/* CTA Banner */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                ¿Necesitas un presupuesto sin compromiso?
              </h2>
              <p className="text-white/80">
                Contáctanos hoy mismo y te atenderemos lo antes posible.
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-primary font-bold"
              asChild
            >
              <Link href="/contact">CONTACTAR AHORA</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview Section */}
      <section id="galeria" className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Galería de Trabajos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Algunos ejemplos de nuestras reparaciones y restauraciones. La calidad habla por sí misma.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.slice(0, 3).map((item) => (
              <GalleryItem 
                key={item.id}
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-bold"
              asChild
            >
              <Link href="/gallery">VER MÁS TRABAJOS</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonios" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Opiniones de Clientes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre lo que dicen nuestros clientes sobre nuestro servicio y profesionalidad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Testimonial 
                key={testimonial.id}
                id={testimonial.id}
                text={testimonial.text}
                author={testimonial.author}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
