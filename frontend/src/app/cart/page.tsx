"use client";

import React from "react";
import Link from "next/link";
import { Header } from "../components/header";

const CartPage = () => {
  return (
    <div>
      <Header />
      <main className="pt-28 pb-10 px-4 md:px-8 lg:px-16 bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex items-center space-x-2 text-gray-500">
            <Link href="/" className="hover:underline">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-black font-bold">Giỏ hàng (0)</span>
          </div>
        </div>

        {/* Nội dung chính */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Phần bên trái: thông tin giỏ hàng */}
              <div className="md:col-span-2">
                <h1 className="text-3xl font-bold mb-6 text-center">GIỎ HÀNG CỦA BẠN</h1>
                <p className="mb-8 text-lg text-gray-700 text-center">Giỏ hàng của bạn đang trống</p>
                <div className="flex justify-center">
                  <Link href="/">
                    <button className="flex items-center bg-black text-white py-3 px-5 rounded-md hover:bg-gray-800 transition-colors duration-300">
                      <span className="mr-2">🠔</span> TIẾP TỤC MUA HÀNG
                    </button>
                  </Link>
                </div>
              </div>

              {/* Phần bên phải: thông tin đơn hàng */}
              <div className="border border-gray-200 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-6 text-center">Thông tin đơn hàng</h2>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold">Tổng tiền:</span>
                    <span className="text-lg font-bold">0đ</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-6 text-center">
                    Bạn có thể nhập mã giảm giá ở trang thanh toán
                  </p>
                  {/* <Link href="/cart"> */}
                    <button className="w-full mt-4 bg-black text-white py-3 rounded-md border-2 border-black transition-colors duration-300 hover:bg-white hover:text-black">
                      XEM GIỎ HÀNG
                    </button>
                  {/* </Link> */}
                  <button className="w-full mt-4 bg-black text-white py-3 rounded-md border-2 border-black transition-colors duration-300 hover:bg-white hover:text-black">
                    THANH TOÁN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
