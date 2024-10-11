import React from 'react';
import { Facebook, Instagram, ChevronDown } from "lucide-react";
import * as Accordion from '@radix-ui/react-accordion';
import { useState } from 'react';

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

const Footer: React.FC = () => {
  const [openItems, setOpenItems] = useState<(number | string)[]>([]);

  const handleToggle = (index: number | string) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-full mt-24 bg-white text-gray-800 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <Accordion.Root type="multiple" className="lg:hidden">
          {sections.map((section, index) => (
            <Accordion.Item key={index} value={`item-${index}`}>
              <Accordion.Header>
                <Accordion.Trigger
                  className="w-full text-left font-bold uppercase cursor-pointer py-2 border-b border-gray-300 flex items-center justify-between"
                  onClick={() => handleToggle(index)} // index là kiểu number ở đây
                >
                  {section.title}
                  <ChevronDown
                    className={`transition-transform duration-300 ${openItems.includes(index) ? 'rotate-180' : 'rotate-0'}`}
                    size={20}
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content
                className={`overflow-hidden ${
                  openItems.includes(index)
                    ? 'accordion-down'
                    : 'accordion-up'
                }`}
              >
                <ul className="list-none p-0">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className={`py-1 text-gray-600 hover:text-black transition-all duration-300 ease-in-out ${
                        openItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px]'
                      }`}
                      style={{
                        transitionDelay: `${openItems.includes(index) ? i * 100 : 0}ms`,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          ))}
          
          {/* Follow Us On Social Media Section */}
          <Accordion.Item value="follow-us">
            <Accordion.Header>
              <Accordion.Trigger
                className="w-full text-left font-bold uppercase cursor-pointer py-2 border-b border-gray-300 flex items-center justify-between"
                onClick={() => handleToggle('follow-us')} // 'follow-us' là kiểu string ở đây
              >
                FOLLOW US ON SOCIAL MEDIA
                <ChevronDown
                  className={`transition-transform duration-300 ${openItems.includes('follow-us') ? 'rotate-180' : 'rotate-0'}`}
                  size={20}
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openItems.includes('follow-us')
                  ? 'max-h-40 opacity-100 translate-y-0'
                  : 'max-h-0 opacity-0 translate-y-[-20px]'
              }`}
            >
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
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>

        {/* Sections for large screens */}
        {sections.map((section, index) => (
          <div key={index} className="hidden lg:block mb-4">
            <h6 className="font-bold uppercase cursor-pointer">{section.title}</h6>
            <ul className="list-none p-0">
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-gray-600 hover:text-black">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Follow Us On Social Media Section for large screens */}
        <div className="hidden lg:block mb-4">
          <h6 className="font-bold uppercase">FOLLOW US ON SOCIAL MEDIA</h6>
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

      <div className="flex flex-col max-w-[1240px] mx-auto py-4 text-center text-gray-600">
        <p className="py-2">© 2022 CÔNG TY TNHH HADES. Tất cả quyền được bảo lưu.</p>
      </div>
    </div>
  );
};

export default Footer;
