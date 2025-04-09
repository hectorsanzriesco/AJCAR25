import { Link } from "wouter";
import { CarFront, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { services } from "@/lib/data";
import { contactInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <CarFront className="text-red-600 h-8 w-8 mr-2" />
              <span className="font-bold text-xl">
                AJ CAR <span className="text-red-600">25</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Tu taller de confianza para chapa y pintura automotriz. Calidad y profesionalidad garantizadas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-red-500 transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-red-500 transition duration-300">Inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-400 hover:text-red-500 transition duration-300">Servicios</a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="text-gray-400 hover:text-red-500 transition duration-300">Galería</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-red-500 transition duration-300">Contacto</a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href="/services">
                    <a className="text-gray-400 hover:text-red-500 transition duration-300">
                      {service.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="text-red-600 h-5 w-5 mr-2 mt-0.5 shrink-0" />
                <span className="text-gray-400">{contactInfo.address}</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-red-600 h-5 w-5 mr-2 mt-0.5 shrink-0" />
                <span className="text-gray-400">{contactInfo.phone}</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-red-600 h-5 w-5 mr-2 mt-0.5 shrink-0" />
                <span className="text-gray-400">{contactInfo.email}</span>
              </li>
              <li className="flex items-start">
                <Clock className="text-red-600 h-5 w-5 mr-2 mt-0.5 shrink-0" />
                <span className="text-gray-400">{contactInfo.hours[0]}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} AJ CAR 25. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
