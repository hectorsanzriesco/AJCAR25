import { Helmet } from "react-helmet";
import GalleryItem from "@/components/GalleryItem";
import { galleryItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Gallery() {
  return (
    <main className="pt-20">
      <Helmet>
        <title>Galería - AJ CAR 25</title>
        <meta name="description" content="Galería de trabajos de chapa y pintura realizados por AJ CAR 25" />
      </Helmet>
      
      {/* Gallery Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Galería de Trabajos
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Descubre algunos de nuestros mejores trabajos de reparación y restauración.
            </p>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <GalleryItem 
                key={item.id}
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-700 mb-6">
              Estos son solo algunos ejemplos de nuestros trabajos. Contáctanos para ver más o para pedir un presupuesto para tu vehículo.
            </p>
            
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold"
              asChild
            >
              <Link href="/contact">SOLICITAR PRESUPUESTO</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Before/After Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Antes y Después
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La mejor manera de evaluar la calidad de nuestro trabajo es ver la transformación completa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Reparación de Golf tras colisión</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-center mb-2 font-semibold">Antes</p>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1578848831435-27eabc4a8e58?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&h=300&q=80" 
                      alt="Antes de reparación" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-center mb-2 font-semibold">Después</p>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&h=300&q=80" 
                      alt="Después de reparación" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Restauración de paragolpes</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-center mb-2 font-semibold">Antes</p>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1574144113084-b6f450cc5e2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&h=300&q=80" 
                      alt="Antes de restauración" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-center mb-2 font-semibold">Después</p>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1606073163627-63a321fc7b4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&h=300&q=80" 
                      alt="Después de restauración" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
