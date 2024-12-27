import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import CartItem from "../../cartitem/cartItem";
import SearchItem from "../../search/searchItem";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cartItems, setCartItems] = useState([
    {
      name: "Allyson Athlete Jersey",
      color: "Tan / M",
      price: "420,000đ",
      img: "https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg",
      quantity: 1,
    },
    {
      name: "Hades Profile Ellipse Cap",
      color: "Đen",
      price: "350,000đ",
      img: "https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg",
      quantity: 1,
    },
  ]);

  const searchRef = useRef(null);
  const cartRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        isSearchFormVisible
      ) {
        setIsSearchFormVisible(false);
      }

      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        isCartVisible
      ) {
        setIsCartVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchFormVisible, isCartVisible]);

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

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value) {
      setSearchResults([
        {
          name: "Allyson Athlete Jersey",
          price: "420,000đ",
          img: "https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg",
        },
        {
          name: "Arbormass Hoodie",
          price: "720,000đ",
          img: "https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg",
        },
        {
          name: "Artifact Sweater",
          price: "450,000đ",
          img: "https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg",
          oldPrice: "590,000đ",
        },
        {
          name: "Alternative Tee",
          price: "252,000đ",
          img: "https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg",
          oldPrice: "420,000đ",
        },
        {
          name: "Angel Tee",
          price: "190,000đ",
          img: "https://product.hstatic.net/1000306633/product/hades1575_837fd4f89fab4872b80194e1ca98dcd8.jpg",
          oldPrice: "380,000đ",
        },
      ]);
    } else {
      setSearchResults([]);
    }
  };

  const menuItems = [
    { name: "SHOP ALL", path: "/" },
    { name: "TOPS", path: "/listProduct/tops" },
    { name: "BOTTOMS", path: "/listProduct/bottoms" },
    { name: "OUTERWEAR", path: "/listProduct/outerwear" },
    { name: "BAGS", path: "/listProduct/bags" },
    { name: "ACCESSORIES", path: "/listProduct/accessories" },
    { name: "SALE", path: "/listProduct/sale" },
  ];

  // Bắt đầu phần trả về JSX
  return (
    <>
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white shadow-xl transform translate-y-0 backdrop-blur-md"
            : "bg-transparent shadow-none transform -translate-y-0"
        } ${isCartVisible || isSearchFormVisible ? "filter blur-sm" : ""}`}
      >
        <div className="bg-black text-white overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            ELEVENTS™ 2024 GET TO KNOW ABOUT OUR VIBE ELEVENTS™ 2024 GET TO KNOW
            ABOUT OUR VIBE ELEVENTS™ 2024 GET TO KNOW ABOUT OUR VIBE
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
            <Link href="/" passHref legacyBehavior>
              <a className="text-xl font-bold flex-shrink-0 hover:text-gray-700">
                Elevents
              </a>
            </Link>

            {!isMobile && (
              <nav className="flex items-center space-x-4">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path} // Sử dụng thuộc tính path được định nghĩa trước đó
                    className="block text-sm font-medium hover:text-gray-700 whitespace-nowrap transition-transform duration-500 ease-in-out transform hover:-translate-y-1"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            )}
          </div>
          <div className="flex items-center space-x-4">
            {!isMobile && (
              <>
                <Link href="/login">
                  <button className="text-sm font-medium hover:text-gray-700 transition-transform transform hover:-translate-y-1 duration-300 ease-in-out">
                    ĐĂNG NHẬP
                  </button>
                </Link>
                <Link href="/register">
                  <button className="text-sm font-medium hover:text-gray-700 transition-transform transform hover:-translate-y-1 duration-300 ease-in-out">
                    ĐĂNG KÝ
                  </button>
                </Link>
              </>
            )}
            <button
              onClick={toggleSearchForm}
              className="hover:text-gray-700 transition-transform transform duration-300 ease-in-out hover:-translate-y-1"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={toggleCart}
              className="hover:text-gray-700 transition-transform transform duration-300 ease-in-out hover:-translate-y-1"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay to close menu by clicking outside */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Menu Mobile Slide-in */}
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
                href={item.path} // Sử dụng thuộc tính path được định nghĩa trước đó
                className="block text-sm font-medium hover:text-gray-700 whitespace-nowrap transition-all duration-500 ease-in-out"
                onClick={toggleMobileMenu}
              >
                {item.name}
              </Link>
            ))}

            {/* Divider Line */}
            <hr className="border-t border-gray-300 my-4" />

            <div className="flex items-center space-x-1 text-sm font-medium">
              <Link
                href="/login"
                className="hover:text-gray-700 whitespace-nowrap transition-all duration-500 ease-in-out"
                onClick={toggleMobileMenu}
              >
                ĐĂNG NHẬP
              </Link>
              <span>/</span>
              <Link
                href="/register"
                className="hover:text-gray-700 whitespace-nowrap transition-all duration-500 ease-in-out"
                onClick={toggleMobileMenu}
              >
                ĐĂNG KÝ
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Cart Slide-in with Smooth Animation */}
      <div
        ref={cartRef}
        className={`fixed top-0 right-0 bottom-0 ${
          isMobile ? "w-full max-w-xs" : "w-full max-w-md"
        } bg-white z-50 transform transition-transform duration-700 ease-in-out ${
          isCartVisible ? "translate-x-0" : "translate-x-full"
        } shadow-lg`}
      >
        {isCartVisible && (
          <CartItem
            cartItems={cartItems}
            toggleCart={toggleCart}
            isMobile={isMobile}
          />
        )}
      </div>

      {/* Search Slide-in */}
      <div ref={searchRef}>
        <SearchItem
          isSearchFormVisible={isSearchFormVisible}
          toggleSearchForm={toggleSearchForm}
          searchQuery={searchQuery}
          handleSearchInputChange={handleSearchInputChange}
          searchResults={searchResults}
        />
      </div>
    </>
  );
};

export default Header;
