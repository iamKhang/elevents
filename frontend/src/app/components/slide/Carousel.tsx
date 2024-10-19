import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  "/images/image.png", 
  "/images/image1.png",
 
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {carouselImages.map((src, index) => (
          <div key={index} className="min-w-full flex-shrink-0">
            <Image
              src={src}
              alt={`Featured Item ${index + 1}`}
              width={1200}
              height={500}
              className="w-full h-auto object-cover"
            />
            
          </div>
        ))}
      </div>

      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-3 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-3 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Carousel;
