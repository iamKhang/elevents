import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Search } from "lucide-react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleSearchForm = () => {
    setIsSearchFormVisible((prev) => !prev);
    setIsCartVisible(false);
    setIsMobileMenuOpen(false);
  };
  const toggleCart = () => {
    setIsCartVisible((prev) => !prev);
    setIsSearchFormVisible(false);
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    "SHOP ALL",
    "TOPS",
    "BOTTOMS",
    "OUTERWEAR",
    "BAGS",
    "ACCESSORIES",
    "SALE",
    "RECRUITMENT",
  ];

  return (
    <>
      <header
        className={`fixed w-full top-0 left-0 z-50 bg-white shadow-md transition-transform duration-500 ease-out ${
          isScrolled ? "transform -translate-y-2 shadow-lg" : "transform translate-y-0"
        } ${(isCartVisible || isSearchFormVisible) ? "filter blur-sm" : ""}`}
      >
        <div className="bg-black text-white overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            ELEVENTS™ 2024 GET TO KNOW ABOUT OUR VIBE ELEVENTS™ 2024 GET TO KNOW ABOUT OUR VIBE ELEVENTS™ 2024 GET TO KNOW ABOUT OUR VIBE
          </div>
        </div>

        <div
          className={`${
            isMobile
              ? "bg-white p-4 shadow-md flex items-center justify-between"
              : "flex items-center justify-between py-4 px-6 bg-white shadow-lg"
          } transition-all duration-500 ease-in-out`}
        >
          {isMobile && (
            <button
              onClick={toggleMobileMenu}
              className="md:hidden transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <Menu className="h-6 w-6" />
            </button>
          )}

          <div className="flex items-center space-x-6 flex-grow">
            <Link
              href="/"
              className="text-xl font-bold flex-shrink-0 hover:text-gray-700 transition-colors duration-300"
            >
              Elevents
            </Link>
            {!isMobile && (
              <nav className="flex items-center space-x-4">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="relative text-sm font-medium hover:text-gray-700 whitespace-nowrap transition-all duration-500 ease-in-out transform hover:-translate-y-1"
                  >
                    {item}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 transition-transform duration-500 ease-out hover:scale-x-100 origin-left"></span>
                  </Link>
                ))}
              </nav>
            )}
          </div>
          <div className="flex items-center space-x-4">
            {!isMobile && (
              <>
                <Link href="/login">
                  <button className="text-sm font-medium hover:text-gray-700 whitespace-nowrap transition-colors duration-300">
                    ĐĂNG NHẬP
                  </button>
                </Link>
                <Link href="/register">
                  <button className="text-sm font-medium hover:text-gray-700 whitespace-nowrap transition-colors duration-300">
                    ĐĂNG KÝ
                  </button>
                </Link>
              </>
            )}
            <button
              onClick={toggleSearchForm}
              className="hover:text-gray-700 transition-transform transform duration-300 ease-in-out hover:scale-110"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={toggleCart}
              className="hover:text-gray-700 transition-transform transform duration-300 ease-in-out hover:scale-110"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide-in */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-full max-w-xs bg-white z-50 transform transition-transform duration-700 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-lg overflow-y-auto`}
        style={{ height: "100vh" }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={toggleMobileMenu}
              aria-label="Close menu"
              className="hover:text-gray-700 transition-transform transform hover:scale-110 ease-in-out duration-300"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-6 space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="block text-sm font-medium hover:text-gray-700 whitespace-nowrap transition-all duration-500 ease-in-out"
                onClick={toggleMobileMenu}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Cart Slide-in */}
      <div
        className={`fixed top-0 right-0 bottom-0 ${
          isMobile ? "w-full max-w-xs" : "w-full max-w-md"
        } bg-white z-50 transform transition-transform duration-700 ease-in-out ${
          isCartVisible ? "translate-x-0" : "translate-x-full"
        } shadow-lg`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Giỏ hàng</h2>
            <button
              onClick={toggleCart}
              aria-label="Close cart"
              className="hover:text-gray-700 transition-transform transform hover:scale-110 ease-in-out duration-300"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6">
            <p>Hiện chưa có sản phẩm</p>
            <div className="mt-4 border-t border-gray-200 pt-4">
              <h3 className="text-lg font-bold">TOTAL: 0đ</h3>
              <div className="mt-4 flex space-x-4">
                <Link href="/cart">
                  <button className="w-full bg-black text-white font-bold py-2 px-4 rounded-none hover:bg-white hover:text-black border-none transition-colors duration-300">
                    XEM GIỎ HÀNG
                  </button>

                </Link>
                <Link href="/cart">
                  <button className="w-full bg-black text-white font-bold py-2 px-4 rounded-md border border-black hover:bg-white hover:text-black transition-colors duration-300">
                    THANH TOÁN
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Slide-in */}
      <div
        className={`fixed top-0 right-0 bottom-0 ${
          isMobile ? "w-full max-w-xs" : "w-full max-w-md"
        } bg-white z-50 transform transition-transform duration-700 ease-in-out ${
          isSearchFormVisible ? "translate-x-0" : "translate-x-full"
        } shadow-lg`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Tìm kiếm</h2>
            <button
              onClick={toggleSearchForm}
              aria-label="Close search form"
              className="hover:text-gray-700 transition-transform transform hover:scale-110 ease-in-out duration-300"
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
    </>
  );
};
