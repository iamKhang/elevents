import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  "/images/image.png", // Đường dẫn tới ảnh đầu tiên
  "/images/image1.png", // Đường dẫn tới ảnh thứ hai
  "/placeholder.svg?height=500&width=1200&text=Featured+Items+1",
  "/placeholder.svg?height=500&width=1200&text=Featured+Items+2",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % carouselImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <Image
          src={carouselImages[currentImageIndex]}
          alt="Featured Items"
          width={1200}
          height={500}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">FEATURED ITEMS</h2>
        </div>
      </div>
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Hero;
