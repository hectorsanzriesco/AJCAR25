import { Link } from "wouter";
import { 
  Car, 
  PaintRoller, 
  Droplets, 
  ServerCrash, 
  Wind, 
  Wand2 
} from "lucide-react";

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, React.ReactNode> = {
  "car": <Car className="h-6 w-6 text-primary" />,
  "paint-roller": <PaintRoller className="h-6 w-6 text-primary" />,
  "tint-slash": <Droplets className="h-6 w-6 text-primary" />,
  "car-crash": <ServerCrash className="h-6 w-6 text-primary" />,
  "wind": <Wind className="h-6 w-6 text-primary" />,
  "magic": <Wand2 className="h-6 w-6 text-primary" />
};

export default function ServiceCard({ id, title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {iconMap[icon]}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href="/contact">
        <a className="text-red-600 font-bold hover:underline inline-flex items-center">
          Solicitar información
          <svg 
            className="ml-2 h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </a>
      </Link>
    </div>
  );
}
