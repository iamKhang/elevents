import React from 'react';
import ProductCard from './index';

const ProductList = () => {
  const products = [
    {
      image1: 'https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg',
      image2: 'https://product.hstatic.net/1000306633/product/7.1_2c4589be2e5c484f992de0f611797a29.jpg',
      name: 'HADES FRAYED EDGE SHORTS',
      price: '480,000',
      colors: ['#ccc'],
    },
    {
      image1: 'https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg',
      image2: 'https://product.hstatic.net/1000306633/product/7.1_2c4589be2e5c484f992de0f611797a29.jpg',
      name: 'HADES STRIPED SOLID SHIRT',
      price: '480,000',
      colors: ['green', 'pink'],
    },
    {
      image1: 'https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg',
      image2: 'https://product.hstatic.net/1000306633/product/7.1_2c4589be2e5c484f992de0f611797a29.jpg',
      name: 'HADES LOVELESS STRIPED SHIRT',
      price: '520,000',
      colors: ['#ccc'],
    },
    {
      image1: 'https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg',
      image2: 'https://product.hstatic.net/1000306633/product/7.1_2c4589be2e5c484f992de0f611797a29.jpg',
      name: 'HADES STANDARD STRIPE SHORTS',
      price: '380,000',
      colors: ['green', 'pink'],
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <div key={index} className="w-full"> {/* Đảm bảo sản phẩm chiếm toàn bộ chiều rộng có sẵn */}
          <ProductCard
            image1={product.image1}
            image2={product.image2}
            name={product.name}
            price={product.price}
            colors={product.colors}
            productLink={''}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
