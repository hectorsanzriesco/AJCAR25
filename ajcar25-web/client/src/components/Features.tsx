import { features } from "@/lib/data";
import { 
  IdCard, 
  Bolt, 
  Clock 
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "certificate": <IdCard className="h-8 w-8 text-white" />,
  "tools": <Bolt className="h-8 w-8 text-white" />,
  "clock": <Clock className="h-8 w-8 text-white" />
};

export default function Features() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-primary rounded-full p-4 inline-flex">
                  {iconMap[feature.icon]}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
