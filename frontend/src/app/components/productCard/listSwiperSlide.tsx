import React, { useRef } from 'react';
import ProductCard from './index';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import CSS cho Swiper
import { Swiper as SwiperType } from 'swiper'; // Nhập Swiper loại
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Nhập biểu tượng từ lucide-react

const ProductListSlide = () => {
  const swiperRef = useRef<SwiperType | null>(null); // Khai báo kiểu cho swiperRef

  const products = [
    // ... (danh sách sản phẩm không thay đổi)
    {
      image1: 'https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg',
      image2: 'https://product.hstatic.net/1000306633/product/7.1_2c4589be2e5c484f992de0f611797a29.jpg',
      name: 'HADES FRAYED EDGE SHORTS',
      price: '480,000',
      colors: ['#ccc'],
      link: ''
    },
    {
      image1: 'https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg',
      image2: 'https://product.hstatic.net/1000306633/product/hades0072_638e374330534a9ba1d4bf33d8b6599f_large.jpg',
      name: 'HADES STRIPED SOLID SHIRT',
      price: '480,000',
      colors: ['green', 'pink'],
      link: ''
    },
    {
      image1: 'https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg',
      image2: 'https://product.hstatic.net/1000306633/product/7.1_2c4589be2e5c484f992de0f611797a29.jpg',
      name: 'HADES LOVELESS STRIPED SHIRT',
      price: '520,000',
      colors: ['#ccc'],
      link: ''
    },
    {
      image1: 'https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg',
      image2: 'https://product.hstatic.net/1000306633/product/7.1_2c4589be2e5c484f992de0f611797a29.jpg',
      name: 'HADES STANDARD STRIPE SHORTS',
      price: '380,000',
      colors: ['green', 'pink'],
      link: ''
    },
    {
      image1: 'https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg',
      image2: 'https://product.hstatic.net/1000306633/product/7.1_2c4589be2e5c484f992de0f611797a29.jpg',
      name: 'HADES FRAYED EDGE SHORTS',
      price: '480,000',
      colors: ['#ccc'],
      link: ''
    },
    {
      image1: 'https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg',
      image2: 'https://product.hstatic.net/1000306633/product/hades0072_638e374330534a9ba1d4bf33d8b6599f_large.jpg',
      name: 'HADES STRIPED SOLID SHIRT',
      price: '480,000',
      colors: ['green', 'pink'],
      link: ''
    },
    {
      image1: 'https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg',
      image2: 'https://product.hstatic.net/1000306633/product/7.1_2c4589be2e5c484f992de0f611797a29.jpg',
      name: 'HADES LOVELESS STRIPED SHIRT',
      price: '520,000',
      colors: ['#ccc'],
      link: ''
    },
    {
      image1: 'https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg',
      image2: 'https://product.hstatic.net/1000306633/product/7.1_2c4589be2e5c484f992de0f611797a29.jpg',
      name: 'HADES STANDARD STRIPE SHORTS',
      price: '380,000',
      colors: ['green', 'pink'],
      link: ''
    },
  ];

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Chuyển tới slide tiếp theo
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Quay lại slide trước
    }
  };

  return (
    <div className="relative flex items-center"> {/* Đặt class cho container */}
      <button 
        onClick={handlePrev} 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-md p-2 cursor-pointer z-10 flex items-center">
        <ChevronLeft className="h-5 w-5" /> {/* Biểu tượng ChevronLeft */}
      </button>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Lưu instance vào ref khi Swiper được khởi tạo
        spaceBetween={20} // Khoảng cách giữa các slide
        slidesPerView={2} // Số lượng slide hiển thị trên màn hình
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slide trên màn hình nhỏ
          },
          768: {
            slidesPerView: 3, // 3 slide trên màn hình vừa
          },
          1024: {
            slidesPerView: 4, // 4 slide trên màn hình lớn
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              image1={product.image1}
              image2={product.image2}
              name={product.name}
              price={product.price}
              colors={product.colors}
              productLink={product.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button 
        onClick={handleNext} 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-md p-2 cursor-pointer z-10 flex items-center">
        <ChevronRight className="h-5 w-5" /> {/* Biểu tượng ChevronRight */}
      </button>
    </div>
  );
};

export default ProductListSlide;
