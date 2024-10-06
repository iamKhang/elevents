import React from 'react'
import { Facebook, Instagram } from "lucide-react";
const sections = [
    {
      title: "HỆ THỐNG CỬA HÀNG HADES",
      items: [
        "HADES STUDIO Store 1: 26 LY TU TRONG STREET, DISTRICT 1, HOCHIMINH (THE NEW PLAYGROUND).",
        "Store 2: 140 NGUYEN HY QUANG, DONG DA DISTRICT, HANOI.",
        "Store 3: 4 PHAM NGU LAO STREET, DISTRICT 1, HOCHIMINH.",
        "Store 4: 56 MAU THAN, NINH KIEU DISTRICT, CANTHO.",
        "Store 5: 152 TRAN QUANG DIEU, WARD 14, DISTRICT 3, HCM."
      ],
    },
    {
      title: "CHÍNH SÁCH",
      items: [
        "- Chính sách sử dụng website",
        "- Phương thức thanh toán",
        "- Chính sách đổi trả",
        "- Chính sách giao nhận - vận chuyển",
        "- Điều khoản dịch vụ",
        "- Hướng dẫn mua hàng",
        "- Chính sách bảo mật"
      ],
    },
    {
      title: "THÔNG TIN LIÊN HỆ",
      items: [
        "- CÔNG TY TNHH HADES",
        "- SỐ CSKH: 02873011021 (10h - 18h)",
        "- Ngày cấp: 20/07/2020",
        "- Tuyển dụng: hr@hades.vn",
        "- Website: hades.vn",
        "- For business: contact@hades.vn"
      ],
    },
  ];
const Footer = () => {
  return (
    <div className="w-full mt-24 bg-white text-gray-800 py-8 px-2">
      <div className="max-w-[1240px] mx-auto mx-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* HỆ THỐNG CỬA HÀNG HADES */}
        {sections.map((section, index) => (
          <div key={index} className="mb-4">
            <h6 className="font-bold uppercase cursor-pointer">
              {section.title}
            </h6>
            <ul className="list-none p-0 hidden lg:block"> 
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-gray-600 hover:text-black">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}


        <div className="mb-4">
          <h6 className="font-bold uppercase">FOLLOW US ON SOCIAL MEDIA</h6>
          <div className="hidden lg:block">
          <div className="flex space-x-4 pt-2">
            <Facebook className="hover:text-blue-600" size={24} />
            <Instagram className="hover:text-pink-500" size={24} />
          </div>
          <div className="pt-4">
            <a href="http://online.gov.vn/Home/WebDetails/78935">
              <img
                src="https://file.hstatic.net/1000306633/file/logo_bct_img_3c1bf699d3004ef2887fee1c4eb20afd.png?v=150"
                alt="Bộ Công Thương"
                className="w-40"
              />
            </a>
          </div>
          </div>
         
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] mx-auto py-4 text-center text-gray-600">
        <p className="py-2">© 2022 CÔNG TY TNHH HADES. Tất cả quyền được bảo lưu.</p>
      </div>
    </div>
  )
}

export default Footer  