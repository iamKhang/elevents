"use client";

import Footer from './components/footer';
import ProductCard from './components/productCard/index';
import ProductList from './components/productCard/list';
export default function Home() {


  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <ProductList />
      <Footer />
    </div>
  );
}
