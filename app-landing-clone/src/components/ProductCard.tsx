import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: string;
  imageSrc: string;
  animationDelay?: string;
}

export function ProductCard({ name, price, imageSrc, animationDelay = "0ms" }: ProductCardProps) {
  return (
    <div className="group animate-fadeIn-scroll" style={{ animationDelay }}>
      <div className="bg-gray-200 h-40 md:h-64 rounded-lg mb-2 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          Quick View
        </div>
        <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#FF4800] hover:text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
      </div>
      <h3 className="font-medium text-sm md:text-base">{name}</h3>
      <p className="text-gray-600 text-sm">{price}</p>
      <div className="mt-2 flex space-x-1">
        <div className="w-3 h-3 rounded-full bg-gray-800 cursor-pointer transform hover:scale-125 transition-transform"></div>
        <div className="w-3 h-3 rounded-full bg-blue-600 cursor-pointer transform hover:scale-125 transition-transform"></div>
        <div className="w-3 h-3 rounded-full bg-green-600 cursor-pointer transform hover:scale-125 transition-transform"></div>
        <div className="w-3 h-3 rounded-full bg-neutral-500 cursor-pointer transform hover:scale-125 transition-transform"></div>
      </div>
    </div>
  );
}
