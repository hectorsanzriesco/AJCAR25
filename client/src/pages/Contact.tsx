import { Helmet } from "react-helmet";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { contactInfo } from "@/lib/data";

export default function Contact() {
  return (
    <main className="pt-20">
      <Helmet>
        <title>Contacto - AJ CAR 25</title>
        <meta name="description" content="Contacta con AJ CAR 25 para información o presupuestos de chapa y pintura" />
      </Helmet>
      
      {/* Contact Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Contacta con Nosotros
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Estamos aquí para ayudarte. Contáctanos para cualquier consulta o para solicitar un presupuesto sin compromiso.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Contact Information */}
            <div>
              <div className="bg-primary rounded-lg shadow-lg p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="font-bold">Dirección:</p>
                      <p>{contactInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Phone className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="font-bold">Teléfono:</p>
                      <p>{contactInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Mail className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="font-bold">Email:</p>
                      <p>{contactInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Clock className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="font-bold">Horario:</p>
                      {contactInfo.hours.map((hour, index) => (
                        <p key={index}>{hour}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Nuestra Ubicación</h3>
                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.123602342531!2d-4.7241777233915855!3d41.63100937111006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4712d42b288c27%3A0xc0d300ed4acd0aa!2sAv.%20Valle%20de%20Esgueva%2C%2014%2C%2047011%20Valladolid!5e0!3m2!1ses!2ses!4v1713096820906!5m2!1ses!2ses" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de AJ CAR 25"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">¿Cuánto tiempo tardan las reparaciones?</h3>
                <p className="text-gray-700">
                  El tiempo de reparación depende del tipo y extensión del daño. Reparaciones pequeñas pueden completarse en 1-2 días, mientras que trabajos más extensos pueden llevar una semana o más.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">¿Trabajáis con seguros?</h3>
                <p className="text-gray-700">
                  Sí, trabajamos con todas las compañías de seguros y nos encargamos de gestionar todo el proceso administrativo para que no tengas que preocuparte.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">¿Ofrecéis garantía en vuestros trabajos?</h3>
                <p className="text-gray-700">
                  Todos nuestros trabajos tienen garantía. La duración de la misma depende del tipo de reparación realizada.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">¿Proporcionáis coche de sustitución?</h3>
                <p className="text-gray-700">
                  Podemos gestionar un vehículo de sustitución dependiendo del tipo de reparación y de lo que cubra tu seguro. Consúltanos para más detalles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
