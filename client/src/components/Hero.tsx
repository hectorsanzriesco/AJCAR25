import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section 
      className="pt-24 pb-12 md:pt-32 md:pb-20 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Expertos en Chapa y Pintura Automotriz
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8">
            Devolvemos a tu vehículo el aspecto de nuevo con los mejores profesionales y tecnología de vanguardia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6"
              asChild
            >
              <Link href="/contact">SOLICITAR PRESUPUESTO</Link>
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="border-2 border-white bg-white text-red-600 hover:bg-gray-200 font-bold px-8 py-6"
              asChild
            >
              <Link href="/services">NUESTROS SERVICIOS</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
