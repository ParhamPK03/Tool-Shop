import { CgMenuGridR } from "react-icons/cg";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".menu-toggle")) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="bg-[#ed242e] h-[60px] mt-6 lg:flex hidden">
        <div className="flex items-center gap-5 pt-3 pr-20">
          <div
            className="flex gap-2 items-center text-white cursor-pointer menu-toggle"
            onClick={handleMenuToggle}
          >
            <CgMenuGridR className="text-3xl" />
            <span className="text-sm">دسته‌بندی کالاها</span>
            <IoIosArrowDown />
          </div>
          <ul className="flex gap-2 text-white">
            <Link to="/">
              <li className="flex gap-3 cursor-pointer hover:opacity-65 duration-150">
                <IoHomeSharp className="text-2xl" />
                <span className="text-md">خانه</span> |
              </li>
            </Link>
            <Link to="/shop">
              <li className="flex gap-3 cursor-pointer hover:opacity-65 duration-150">
                <FaShopify className="text-2xl" />
                <span className="text-md">محصولات خارجی</span> |
              </li>
            </Link>
            <Link to="/blogs">
              <li className="flex gap-3 cursor-pointer hover:opacity-65 duration-150">
                <IoDocumentText className="text-2xl" />
                <span className="text-md">بلاگ</span> |
              </li>
            </Link>
            <Link to="/discount">
              <li className="flex gap-3 cursor-pointer hover:opacity-65 duration-150">
                <MdDiscount className="text-xl" />
                <span className="text-md">تخفیف ها</span> |
              </li>
            </Link>
            <Link to="/aboutUs">
              <li className="flex gap-3 cursor-pointer hover:opacity-65 duration-150">
                <FaUsers className="text-2xl" />
                <span className="text-md">درباره ما</span>
              </li>
            </Link>
          </ul>
        </div>
        {isMenuOpen && (
          <div
            className="bg-white text-black p-4 mr-20 absolute w-[200px] rounded-xl mt-14 shadow-md z-50" 
          >
            <ul className="flex flex-col gap-y-1">
              <div
                className="flex gap-1 cursor-pointer hover:bg-gray-200 py-2 px-1 duration-200 rounded-xl"
                onClick={() => {
                  const target = document.getElementById("arreh-dasti");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <img
                  src="/img/arreh/Untitled-1.pngarrreh.png"
                  className="w-[25px]"
                  alt=""
                />
                <li className="text-sm">اره دستی</li>
              </div>

              <hr />
              <div
                className="flex gap-1 cursor-pointer hover:bg-gray-200 py-2 px-1 duration-200 rounded-xl"
                onClick={() => {
                  const target = document.getElementById("arreh-dasti");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <img src="/img/arreh/arrehh.png" className="w-[25px]" alt="" />
                <li className="text-sm">اره کمانی</li>
              </div>
              <hr />
              <div
                className="flex gap-1 cursor-pointer hover:bg-gray-200 py-2 px-1 duration-200 rounded-xl"
                onClick={() => {
                  const target = document.getElementById("frez");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <img
                  src="/img/arreh/Untitled-1.pngfrez.png"
                  className="w-[25px]"
                  alt=""
                />
                <li className="text-sm">سنگ فرز</li>
              </div>
              <hr />
              <div
                className="flex gap-1 cursor-pointer hover:bg-gray-200 py-2 px-1 duration-200 rounded-xl"
                onClick={() => {
                  const target = document.getElementById("barghi");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <img
                  src="/img/arreh/Untitled-1.pngarreh.png"
                  className="w-[25px]"
                  alt=""
                />
                <li className="text-sm">اره برقی</li>
              </div>
              <hr />
              <div
                className="flex gap-1 cursor-pointer hover:bg-gray-200 py-2 px-1 duration-200 rounded-xl"
                onClick={() => {
                  const target = document.getElementById("arreh-dasti");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <img
                  src="/img/arreh/Untitled-1.pngachar.png"
                  className="w-[25px]"
                  alt=""
                />
                <li className="text-sm">انواع آچار</li>
              </div>
              <hr />
              <div
                className="flex gap-1 cursor-pointer hover:bg-gray-200 py-2 px-1 duration-200 rounded-xl"
                onClick={() => {
                  const target = document.getElementById("pikor");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <img
                  src="/img/arreh/Untitled-1.pngdrilled.png"
                  className="w-[25px]"
                  alt=""
                />
                <li className="text-sm">پیکور</li>
              </div>
              <hr />
              <div
                className="flex gap-1 cursor-pointer hover:bg-gray-200 py-2 px-1 duration-200 rounded-xl"
                onClick={() => {
                  const target = document.getElementById("drill");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <img
                  src="/img/arreh/Untitled-1.pngdril.png"
                  className="w-[25px]"
                  alt=""
                />
                <li className="text-sm">دریل</li>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
