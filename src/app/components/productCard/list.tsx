import React, { useState } from "react";
import ProductCard from "./index";


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
      image1:
        "https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg",
      image2:
        "https://product.hstatic.net/1000306633/product/7.1_2c4589be2e5c484f992de0f611797a29.jpg",
      name: "HADES FRAYED EDGE SHORTS",
      price: "480,000",
      colors: ["#ccc"],
    },
    {
      image1:
        "https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg",
      image2:
        "https://product.hstatic.net/1000306633/product/7.1_2c4589be2e5c484f992de0f611797a29.jpg",
      name: "HADES STRIPED SOLID SHIRT",
      price: "480,000",
      colors: ["green", "pink"],
    },
    {
      image1:
        "https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg",
      image2:
        "https://product.hstatic.net/1000306633/product/7.1_2c4589be2e5c484f992de0f611797a29.jpg",
      name: "HADES LOVELESS STRIPED SHIRT",
      price: "520,000",
      colors: ["#ccc"],
    },
    {
      image1:
        "https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg",
      image2:
        "https://product.hstatic.net/1000306633/product/7.1_2c4589be2e5c484f992de0f611797a29.jpg",
      name: "HADES STANDARD STRIPE SHORTS",
      price: "380,000",
      colors: ["green", "pink"],
    },
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
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <div key={index} className="w-full">
          {" "}
          {/* Đảm bảo sản phẩm chiếm toàn bộ chiều rộng có sẵn */}
          <ProductCard
            image1={product.image1}
            image2={product.image2}
            name={product.name}
            price={product.price}
            colors={product.colors}
            productLink={""}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
