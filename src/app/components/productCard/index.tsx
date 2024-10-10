import React, { useState } from 'react';

type ProductCardProps = {
  image1: string;
  image2: string; 
  name: string;
  price: string;
  colors: string[];
  productLink: string; 
};

const ProductCard: React.FC<ProductCardProps> = ({ image1, image2, name, price, colors, productLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const marginVertical = "40px"; 

  return (
    <div 
      className="flex flex-col items-center rounded-lg p-4 w-full"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full" style={{ marginTop: marginVertical, marginBottom: marginVertical }}>
        <a href={productLink} className="block w-full h-full relative"> 
          {/* Thêm link bao quanh hình ảnh */}
          <img 
            src={isHovered ? image2 : image1} 
            alt={name} 
            className="w-full h-full object-cover transition-all duration-500 ease-in-out" 
            style={{
              transform: isHovered ? 'scale(0.95)' : 'scale(1)', 
              transition: 'transform 0.5s ease',
            }}
          />
        </a>

        {/* Hiển thị nút dưới ảnh khi hover */}
        <div 
          className={`absolute bottom-0 left-0 right-0 p-1 flex justify-around transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{ transition: 'opacity 0.5s ease-in-out' }}
        >
          <button 
            onClick={(e) => { e.preventDefault(); window.location.href = productLink }} 
            className="bg-black text-white py-1 px-2 flex-1 mx-1 text-center"
          >
            MUA NGAY
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); alert('Thêm vào giỏ hàng!') }} 
            className="bg-black text-white py-1 px-2 flex-1 mx-1 text-center"
          >
            THÊM VÀO GIỎ
          </button>
        </div>
      </div>
      
      {/* Màu sắc của sản phẩm */}
      <div className="flex gap-2 mt-2"> 
        {colors.map((color, index) => (
          <span
            key={index}
            className="w-8 h-2 rounded-md" 
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
      
      {/* Tên sản phẩm có link */}
      <button 
        onClick={() => window.location.href = productLink} 
        className="text-xs font-bold text-gray-700 mt-2 text-center"
      >
        {name}
      </button>

      {/* Giá sản phẩm */}
      <p className="text-sm text-gray-700 text-center">{price}đ</p>
    </div>
  );
};

export default ProductCard;
