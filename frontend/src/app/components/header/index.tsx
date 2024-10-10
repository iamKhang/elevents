"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart, Search, ChevronLeft, ChevronRight } from "lucide-react"

const carouselImages = [
  "/images/image.png", // Đường dẫn tới ảnh đầu tiên
  "/images/image1.png", // Đường dẫn tới ảnh thứ hai
  "/placeholder.svg?height=500&width=1200&text=Featured+Items+1",
  "/placeholder.svg?height=500&width=1200&text=Featured+Items+2",
];


export const Header = () => {  // Đã sửa cú pháp khai báo component
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false)
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)
  const toggleSearchForm = () => {
    setIsSearchFormVisible((prev) => !prev)
    setIsCartVisible(false)
  }
  const toggleCart = () => {
    setIsCartVisible((prev) => !prev)
    setIsSearchFormVisible(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length)
  }

  const menuItems = [
    "SHOP ALL",
    "TOPS",
    "BOTTOMS",
    "OUTERWEAR",
    "BAGS",
    "ACCESSORIES",
    "SALE",
    "RECRUITMENT",
  ]

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md transition-transform duration-300 ease-in-out">
        <div className="bg-black text-white overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            ELEVENTS™ 2024 GET TO KNOW ABOUT OUR VIBE ELEVENTS™ 2024 GET TO KNOW ABOUT OUR VIBE ELEVENTS™ 2024 GET TO KNOW ABOUT OUR VIBE
          </div>
        </div>

        <div className={isMobile ? "bg-white p-4 shadow-md" : "flex items-center justify-between py-4 px-6 bg-white shadow-lg"}>
          <div className="flex items-center space-x-6 flex-grow">
            <Link href="/" className="text-xl font-bold flex-shrink-0 hover:text-gray-700 transition-colors duration-300">
              Elevents
            </Link>
            {!isMobile && (
              <nav className="flex items-center space-x-4">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="relative text-sm font-medium hover:text-gray-700 whitespace-nowrap transition-colors duration-300"
                  >
                    {item}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 transition-transform duration-300 hover:scale-x-100 origin-left"></span>
                  </Link>
                ))}
              </nav>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <button className="text-sm font-medium hover:text-gray-700 whitespace-nowrap transition-colors duration-300">ĐĂNG NHẬP</button>
            </Link>
            <Link href="/register">
              <button className="text-sm font-medium hover:text-gray-700 whitespace-nowrap transition-colors duration-300">ĐĂNG KÝ</button>
            </Link>
            <button onClick={toggleSearchForm} className="hover:text-gray-700 transition-transform transform hover:scale-105">
              <Search className="h-5 w-5" />
            </button>
            <button onClick={toggleCart} className="hover:text-gray-700 transition-transform transform hover:scale-105">
              <ShoppingCart className="h-5 w-5" />
            </button>
            {isMobile && (
              <button onClick={toggleMobileMenu} className="md:hidden">
                <Menu className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={toggleMobileMenu}
          ></div>
        )}

        <div
          className={`fixed top-0 left-0 bottom-0 w-2/5 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b shadow-sm">
              <div className="flex items-center space-x-2">
                <img src="/placeholder.svg?height=32&width=32" alt="Wolf Logo" className="h-8 w-8" />
                <span className="text-xs">MADE IN VIETNAM SINCE 2018</span>
              </div>
              <button onClick={toggleMobileMenu} aria-label="Close menu" className="hover:text-gray-700 transition-transform transform hover:scale-105">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-grow overflow-y-auto">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block px-4 py-2 text-lg font-medium border-b last:border-b-0 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-900"
                  onClick={toggleMobileMenu}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className={`fixed top-0 right-0 bottom-0 w-full max-w-lg bg-white z-50 transform transition-transform duration-500 ease-in-out ${isCartVisible ? "translate-x-0" : "translate-x-full"} shadow-lg`}>
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Giỏ hàng</h2>
            <button onClick={toggleCart} aria-label="Close cart" className="hover:text-gray-700 transition-transform transform hover:scale-105">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6">
            <p>Hiện chưa có sản phẩm</p>
            <div className="mt-4 border-t border-gray-200 pt-4">
              <h3 className="text-lg font-bold">TOTAL: 0đ</h3>
              <div className="mt-4 flex space-x-4">
                <button className="w-full bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300">XEM GIỎ HÀNG</button>
                <button className="w-full bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300">THANH TOÁN</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`fixed top-0 right-0 bottom-0 w-full max-w-lg bg-white z-50 transform transition-transform duration-500 ease-in-out ${isSearchFormVisible ? "translate-x-0" : "translate-x-full"} shadow-lg`}>
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Tìm kiếm</h2>
            <button onClick={toggleSearchForm} aria-label="Close search form" className="hover:text-gray-700 transition-transform transform hover:scale-105">
              <X className="h-6 w-6" />
            </button>
          </div>
          <form className="mt-6 space-y-4">
            <div>
              <input
                type="text"
                id="search"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Tìm kiếm sản phẩm..."
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300"
              >
                Tìm kiếm
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="relative mt-[120px]">
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
    </>
  )
}
