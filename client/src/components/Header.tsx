import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, CarFront } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/services", label: "Servicios" },
  { href: "/gallery", label: "Galería" },
  { href: "/contact", label: "Contacto" }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled || mobileMenuOpen ? "bg-primary shadow-md" : "bg-primary/80"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <CarFront className="text-red-600 h-8 w-8 mr-2" />
              <span className="text-white font-bold text-2xl font-sans">
                AJ CAR <span className="text-red-600">25</span>
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={cn(
                  "text-white hover:text-red-500 transition duration-300 font-medium",
                  location === item.href && "text-red-500"
                )}>
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-primary-foreground/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a 
                  className={cn(
                    "text-white hover:text-red-500 transition duration-300 font-medium",
                    location === item.href && "text-red-500"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
