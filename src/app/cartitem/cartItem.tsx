import { X } from "lucide-react";
import Link from "next/link";

interface CartItemProps {
  cartItems: {
    name: string;
    color: string;
    price: string;
    img: string;
    quantity: number;
  }[];
  toggleCart: () => void;
  isMobile: boolean;
}

const CartItem = ({ cartItems, toggleCart, isMobile }: CartItemProps) => {
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 ${
        isMobile ? "w-full max-w-xs" : "w-full max-w-md"
      } bg-white z-50 transform transition-transform duration-700 ease-in-out translate-x-0 shadow-lg`}
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
                      readOnly
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
            <span className="text-lg font-bold">
              {cartItems.reduce((total, item) => total + parseInt(item.price.replace(/[^\d]/g, '')), 0).toLocaleString('vi-VN')}đ
            </span>
          </div>
          <div className="flex space-x-4">
            <Link href="/cart">
              <button className="w-full bg-black text-white font-bold py-3 px-4 rounded-md border border-black hover:bg-white hover:text-black transition-colors duration-300">
                XEM GIỎ HÀNG
              </button>
            </Link>
            <Link href="/cart">
              <button className="w-full bg-black text-white font-bold py-3 px-4 rounded-md border border-black hover:bg-white hover:text-black transition-colors duration-300">
                THANH TOÁN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
