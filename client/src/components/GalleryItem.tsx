interface GalleryItemProps {
  id: number;
  title: string;
  imageUrl: string;
}

export default function GalleryItem({ id, title, imageUrl }: GalleryItemProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <p className="text-white p-4 font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
}
