"use client";

import Footer from "./components/footer";
import  {Header}  from "./components/header";
import Hero from "./components/hero";


export default function Home() {


  return (
    <div>
      <Header />
      <Hero />
      <main className="p-4 mt-20">
        <h1 className="text-2xl font-bold">Welcome to the Elevents Shop!</h1>
        <p className="text-gray-700">Explore our collection of unique and stylish apparel.aawf</p>
      </main>
      <Footer />
    </div>
  );
}
