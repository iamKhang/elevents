"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart, Search } from 'lucide-react'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false)
  const [isRegisterFormVisible, setIsRegisterFormVisible] = useState(false)
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false)
  const [isCartVisible, setIsCartVisible] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleLoginForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible)
    setIsRegisterFormVisible(false)
    setIsSearchFormVisible(false)
    setIsCartVisible(false)
  }

  const toggleRegisterForm = () => {
    setIsRegisterFormVisible(!isRegisterFormVisible)
    setIsLoginFormVisible(false)
    setIsSearchFormVisible(false)
    setIsCartVisible(false)
  }

  const toggleSearchForm = () => {
    setIsSearchFormVisible(!isSearchFormVisible)
    setIsLoginFormVisible(false)
    setIsRegisterFormVisible(false)
    setIsCartVisible(false)
  }

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible)
    setIsLoginFormVisible(false)
    setIsRegisterFormVisible(false)
    setIsSearchFormVisible(false)
  }

  const menuItems = [
    "SHOP ALL",
    "TOPS",
    "BOTTOMS",
    "OUTERWEAR",
    "BAGS",
    "ACCESSORIES",
    "SALE",
    "RECRUITMENT"
  ]

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md transition-transform duration-300 ease-in-out">
        {/* Marquee */}
        <div className="bg-black text-white overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            ELEVENTS™ 2024 GET TO KNOW ABOUT OUR VIBE ELEVENTS™ 2024 GET TO KNOW ABOUT OUR VIBE ELEVENTS™ 2024 GET TO KNOW ABOUT OUR VIBE
          </div>
        </div>

        {/* Mobile / Desktop Header */}
        {isMobile ? (
          <div className="bg-white p-4 shadow-md">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <img src="/placeholder.svg?height=32&width=32" alt="Wolf Logo" className="h-8 w-8" />
                  <span className="text-xs">MADE IN VIETNAM SINCE 2018</span>
                </div>
                <span className="text-sm font-bold mt-1">STREETWEAR BRAND LIMITED</span>
              </div>
              <div className="flex items-center space-x-4">
                <button onClick={toggleMobileMenu} aria-label="Open menu" className="hover:text-gray-700 transition-transform transform hover:scale-105">
                  <Menu className="h-6 w-6" />
                </button>
                <Search className="h-6 w-6 hover:text-gray-700 transition-transform transform hover:scale-105" />
                <div className="flex items-center">
                  <ShoppingCart onClick={toggleCart} className="h-6 w-6 hover:text-gray-700 transition-transform transform hover:scale-105" />
                  <span className="ml-1 text-sm">(0)</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between py-4 px-6 bg-white shadow-lg">
            <div className="flex items-center space-x-6 flex-grow">
              <Link href="/" className="text-xl font-bold flex-shrink-0 hover:text-gray-700 transition-colors duration-300">
                Elevents
              </Link>
              {!isMobile && (
                <nav className="flex items-center space-x-4">
                {menuItems.map((item, index) => (
                  <Link 
                    key={index} 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="relative text-sm font-medium hover:text-gray-700 whitespace-nowrap transition-colors duration-300"
                  >
                    {item}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 transition-transform duration-300 hover:scale-x-100 origin-left"></span>
                  </Link>
                ))}
              </nav>
              )}
            </div>
            <div className="flex items-center space-x-4 flex-shrink-0">
              <button 
                onClick={toggleLoginForm} 
                className="text-sm font-medium hover:text-gray-700 whitespace-nowrap transition-colors duration-300"
              >
                ĐĂNG NHẬP
              </button>
              <button 
                onClick={toggleRegisterForm} 
                className="text-sm font-medium hover:text-gray-700 whitespace-nowrap transition-colors duration-300"
              >
                ĐĂNG KÝ
              </button>
              <button 
                onClick={toggleSearchForm} 
                className="hover:text-gray-700 transition-transform transform hover:scale-105"
              >
                <Search className="h-5 w-5" />
              </button>
              <button 
                onClick={toggleCart} 
                className="hover:text-gray-700 transition-transform transform hover:scale-105"
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={toggleMobileMenu}
        ></div>

        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 left-0 bottom-0 w-2/5 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b shadow-sm">
              <div className="flex items-center space-x-2">
                <img src="/placeholder.svg?height=32&width=32" alt="Wolf Logo" className="h-8 w-8" />
                <div className="flex flex-col">
                  <span className="text-xs">MADE IN VIETNAM SINCE 2018</span>
                  <span className="text-sm font-bold">STREETWEAR BRAND LIMITED</span>
                </div>
              </div>
              <button onClick={toggleMobileMenu} aria-label="Close menu" className="hover:text-gray-700 transition-transform transform hover:scale-105">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-grow overflow-y-auto">
              {menuItems.map((item, index) => (
                <Link 
                  key={index} 
                  href={item === "MENU" ? "/" : `/${item.toLowerCase().replace(' ', '-')}`} 
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

      {/* Cart Form */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-full max-w-lg bg-white z-50 transform transition-transform duration-500 ease-in-out ${isCartVisible ? 'translate-x-0' : 'translate-x-full'} shadow-lg`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Giỏ hàng</h2>
            <button 
              onClick={toggleCart} 
              aria-label="Close cart"
              className="hover:text-gray-700 transition-transform transform hover:scale-105"
            >
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

      {/* Search Form */}
      <div className={`fixed top-0 right-0 bottom-0 w-full max-w-lg bg-white z-50 transform transition-transform duration-500 ease-in-out ${isSearchFormVisible ? 'translate-x-0' : 'translate-x-full'} shadow-lg`}>
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Tìm kiếm</h2>
            <button 
              onClick={toggleSearchForm} 
              aria-label="Close search form"
              className="hover:text-gray-700 transition-transform transform hover:scale-105"
            >
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

      {/* Login Form */}
      {isLoginFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6">Đăng nhập</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Email của bạn"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Mật khẩu của bạn"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300"
                >
                  Đăng nhập
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Quên mật khẩu?</a>
              <span className="mx-2">|</span>
              <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Đăng ký</a>
            </div>
            <button 
              onClick={toggleLoginForm} 
              className="mt-4 text-sm text-gray-600 hover:text-black transition-colors w-full text-center"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      {/* Register Form */}
      {isRegisterFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6">Đăng ký</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Tên</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Tên của bạn"
                />
              </div>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input type="radio" id="gender-female" name="gender" className="h-4 w-4 text-primary" />
                  <label htmlFor="gender-female" className="ml-2 block text-sm font-medium text-gray-700">Nữ</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="gender-male" name="gender" className="h-4 w-4 text-primary" />
                  <label htmlFor="gender-male" className="ml-2 block text-sm font-medium text-gray-700">Nam</label>
                </div>
              </div>
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Ngày sinh</label>
                <input
                  type="date"
                  id="dob"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Email của bạn"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Mật khẩu của bạn"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300"
                >
                  Đăng ký
                </button>
              </div>
            </form>
            <button 
              onClick={toggleRegisterForm} 
              className="mt-4 text-sm text-gray-600 hover:text-black transition-colors w-full text-center"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </>
  )
}
