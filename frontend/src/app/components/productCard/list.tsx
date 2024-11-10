import React, { useState } from 'react';
import ProductCard from './index';
import { Listbox } from '@headlessui/react';

type Product = {
  image1: string;
  image2: string;
  name: string;
  price: string;
  colors: string[];
  link: string;
};

const sortingOptions = [
  { name: 'Giá: Giảm dần', value: 'price_desc' },
  { name: 'Giá: Tăng dần', value: 'price_asc' },
  { name: 'Cũ nhất', value: 'oldest' },
  { name: 'Mới nhất', value: 'newest' },
  { name: 'Bán chạy nhất', value: 'bestselling' },
  { name: 'Sản phẩm nổi bật', value: 'featured' },
];

const ProductList: React.FC = () => {
  const [selectedSort, setSelectedSort] = useState(sortingOptions[0].value);
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // Giả sử API trả về danh sách sản phẩm
  //   fetch('https://api.example.com/products')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data); // Cập nhật danh sách sản phẩm từ API
  //     })
  //     .catch((error) => console.error('Error fetching products:', error));
  // }, []);
  const products = [
    {
      image1: 'https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg',
      image2: 'https://product.hstatic.net/1000306633/product/7.1_2c4589be2e5c484f992de0f611797a29.jpg',
      name: 'HADES FRAYED EDGE SHORTS',
      price: '480,000',
      colors: ['#ccc'],
      link : ''
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
    }
  ];

  const sortProducts = (products: Product[], criteria: string): Product[] => {
    switch (criteria) {
      case 'price_desc':
        return products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      case 'price_asc':
        return products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      case 'newest':
        return products; // Assuming already sorted newest to oldest
      case 'oldest':
        return products.reverse(); // Reverse to sort from oldest to newest
      case 'bestselling':
        return products; // Assuming logic is implemented elsewhere
      case 'featured':
        return products; // Assuming logic is implemented elsewhere
      default:
        return products;
    }
  };

  return (
    <div className="relative">
  <div className="absolute right-20 top-0 z-10">
    <Listbox value={selectedSort} onChange={setSelectedSort}>
      {/* Set a fixed width for the button */}
      <Listbox.Button className="border p-2 mb-4 w-48">
        {sortingOptions.find((option) => option.value === selectedSort)?.name}
      </Listbox.Button>
      {/* Set the same fixed width for the options */}
      <Listbox.Options className="absolute border p-2 bg-white shadow-lg mt-1 w-48">
        {sortingOptions.map((option) => (
          <Listbox.Option
            key={option.value}
            value={option.value}
            className={({ active }) => `cursor-pointer p-2 ${active ? 'bg-blue-100' : 'bg-white'}`}
          >
            {option.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
    {sortProducts(products, selectedSort).map((product, index) => (
      <div key={index} className="w-full">
        <ProductCard
          image1={product.image1}
          image2={product.image2}
          name={product.name}
          price={parseFloat(product.price)
            .toFixed(3)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 
          colors={product.colors}
          productLink={product.link}
        />
      </div>
    ))}
  </div>
</div>

  );
};

export default ProductList;
