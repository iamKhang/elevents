import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import CartItem from "../../cart/cartItem"; // Giữ lại import CartItem như ban đầu

const Header = () => {
  // Giữ nguyên toàn bộ state đã khai báo trước đó
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
      img: "/images/allyson-athlete-jersey.jpg",
      quantity: 1,
    },
    {
      name: "Hades Profile Ellipse Cap",
      color: "Đen",
      price: "350,000đ",
      img: "/images/hades-profile-ellipse-cap.jpg",
      quantity: 1,
    },
  ]);

  // Giữ nguyên useEffect để theo dõi sự thay đổi kích thước và cuộn trang
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

  // Các hàm toggle để mở/đóng các thành phần
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

  // Hàm xử lý thay đổi kết quả tìm kiếm
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value) {
      setSearchResults([
        { name: "Allyson Athlete Jersey", price: "420,000đ", img: "/images/allyson-athlete-jersey.jpg" },
        { name: "Arbormass Hoodie", price: "720,000đ", img: "/images/arbormass-hoodie.jpg" },
        { name: "Artifact Sweater", price: "450,000đ", img: "/images/artifact-sweater.jpg", oldPrice: "590,000đ" },
        { name: "Alternative Tee", price: "252,000đ", img: "/images/alternative-tee.jpg", oldPrice: "420,000đ" },
        { name: "Angel Tee", price: "190,000đ", img: "/images/angel-tee.jpg", oldPrice: "380,000đ" },
      ]);
    } else {
      setSearchResults([]);
    }
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

  // Bắt đầu phần trả về JSX
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
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="block text-sm font-medium hover:text-gray-700 whitespace-nowrap transition-all duration-500 ease-in-out"
                onClick={toggleMobileMenu}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/login"
              className="block text-sm font-medium hover:text-gray-700 whitespace-nowrap transition-all duration-500 ease-in-out"
              onClick={toggleMobileMenu}
            >
              ĐĂNG NHẬP
            </Link>
            <Link
              href="/register"
              className="block text-sm font-medium hover:text-gray-700 whitespace-nowrap transition-all duration-500 ease-in-out"
              onClick={toggleMobileMenu}
            >
              ĐĂNG KÝ
            </Link>
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
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Giỏ hàng</h2>
            <button
              onClick={toggleCart}
              aria-label="Close cart"
              className="hover:text-gray-700 transition-transform transform hover:scale-110 ease-in-out duration-300"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 border-b pb-4">
                <div className="w-24 h-24 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">{item.color}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        className="w-12 px-2 py-1 border border-gray-300 rounded-md text-center"
                      />
                    </div>
                    <span className="text-sm font-bold text-black">{item.price}</span>
                  </div>
                </div>
                <button
                  aria-label="Remove item"
                  className="text-gray-500 hover:text-black transition-colors duration-300"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold">TOTAL</span>
              <span className="text-lg font-bold">770,000đ</span>
            </div>
            <div className="flex space-x-4">
              <Link href="/cart">
                <button className="w-full bg-black text-white font-bold py-3 px-4 rounded-md border border-black hover:bg-white hover:text-black transition-colors duration-300">
                  XEM GIỎ HÀNG
                </button>
              </Link>
              <Link href="/checkout">
                <button className="w-full bg-black text-white font-bold py-3 px-4 rounded-md border border-black hover:bg-white hover:text-black transition-colors duration-300">
                  THANH TOÁN
                </button>
              </Link>
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
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
            </div>
          </form>
          {searchResults.length > 0 && (
            <div className="mt-6 space-y-4 divide-y divide-gray-200">
              {searchResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between space-x-4 py-4">
                  <div className="flex-grow">
                    <h3 className="text-sm font-medium">{result.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-black">{result.price}</span>
                      {result.oldPrice && (
                        <span className="text-xs line-through text-gray-500">{result.oldPrice}</span>
                      )}
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                    <img src={result.img} alt={result.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
              <div className="text-center text-sm font-medium text-blue-600 cursor-pointer hover:underline">
                Xem thêm 14 sản phẩm
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
