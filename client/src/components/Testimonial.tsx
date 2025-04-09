import { Star, StarHalf } from "lucide-react";

interface TestimonialProps {
  id: number;
  text: string;
  author: string;
  rating: number;
}

export default function Testimonial({ id, text, author, rating }: TestimonialProps) {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-5 w-5 fill-red-600 text-red-600" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-5 w-5 fill-red-600 text-red-600" />);
    }
    
    return stars;
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-md h-full">
      <div className="flex items-center mb-4">
        <div className="text-red-600 flex">
          {renderStars()}
        </div>
      </div>
      <p className="italic mb-4 text-gray-700">{`"${text}"`}</p>
      <div className="font-bold">{author}</div>
    </div>
  );
}
