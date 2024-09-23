import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {  useContext } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import { UserContext } from "../Context/Context";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { RiSearch2Line } from "react-icons/ri";
import { FaShopify } from "react-icons/fa";
import { IoHomeSharp, IoDocumentText } from "react-icons/io5";
import { GiToolbox } from "react-icons/gi";
import { TbEyePlus } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import {Link} from "react-router-dom"
import { FiUser } from "react-icons/fi";
import { MdDiscount } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa6";
import { IoIosWallet } from "react-icons/io";
import { BsChatSquareText } from "react-icons/bs";
import { HiUser } from "react-icons/hi";

const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const {  cart,likes } = useContext(UserContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const handleUserClick = () => {
    if (user) {
      navigate('/account-details');
    } else {
      navigate('/login');
    }
  };
  
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);
  const { user, logoutUser} = useContext(UserContext);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const handleLogout = () => {
    navigate("/");
    logoutUser();
    setIsOpenUserMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpenUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="pt-4 lg:px-20 px-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-8">
            <div className="lg:hidden flex text-[#ed242e] text-4xl cursor-pointer" onClick={toggleMenu}>
              <CgMenuGridO />
            </div>
            <Link to="/">
            <div className="lg:flex hidden cursor-pointer">
              <img src="/img/navbar/Untitled-1.png1.png" className="w-[50px]" alt="" />
              <div className="flex flex-col items-start">
                <span className="text-[#ed242e] font-bold text-xl">محصولات خارجی رونیکس</span>
                <span className="text-[12px] font-bold">محصولات خارجی ابزار آلات رونیکس</span>
              </div>
            </div>
            </Link>
            <div className="relative lg:flex hidden items-center justify-end">
              <input type="text" className="bg-gray-100 w-[425px] h-[42px] rounded-full placeholder:text-[13px] pr-3 pb-2 outline-none" placeholder="جستجو برای محصولات" />
              <RiSearch2Line className="absolute ml-2 text-2xl text-gray-500 cursor-pointer" />
            </div>
          </div>
          <Link to="/">
          <div className="cursor-pointer lg:hidden flex">
            <div className="flex flex-col items-end -ml-2">
              <span className="text-[#ed242e] font-bold text-xl">محصولات خارجی رونیکس</span>
              <span className="text-[12px] font-bold">محصولات خارجی ابزار آلات رونیکس</span>
            </div>
            <img src="/img/navbar/Untitled-1.pngw.png" className="w-[50px]" alt="" />
          </div>
          </Link>
          <div className="gap-5 lg:flex hidden">
          {user ? (
          <div
            onClick={() => setIsOpenUserMenu(!isOpenUserMenu)}
            className="relative bg-[#ed242e] text-white w-[49px] h-[49px] rounded-full flex items-center justify-center cursor-pointer -mt-3"
          >
            <FiUser className="text-white text-2xl" />
            {isOpenUserMenu && (
              <div
                ref={menuRef}
                className="absolute top-10 -left-8 mt-2 w-40  bg-white shadow-lg py-6 px-5 rounded-md z-20"
              >
                <Link to="/account-details">
                  <div className="flex items-center pr-2 cursor-pointer gap-1 rounded-md w-full py-1.5 mt-2 hover:opacity-50 bg-[#ed242e] text-white">
                    <HiUser />
                    <button className="text-[12px] flex items-center justify-center">
                      جزییات حساب
                    </button>
                  </div>
                </Link>
                <Link to="/aboutUs">
                  <div className="flex items-center pr-4 cursor-pointer gap-2 rounded-md w-full py-1.5 mt-2 hover:opacity-50 bg-[#ed242e] text-white">
                    <BsChatSquareText />
                    <button className="text-[12px] flex items-center justify-center">
                      درباره ما
                    </button>
                  </div>
                </Link>
                <Link to="/wallet">
                  <div className="flex items-center pr-4 cursor-pointer gap-2 rounded-md w-full py-1.5 mt-2 hover:opacity-50 bg-[#ed242e] text-white">
                    <IoIosWallet />
                    <button className="text-[12px] flex items-center justify-center">
                      کیف پول
                    </button>
                  </div>
                </Link>
                <div
                  className="flex items-center pr-4 cursor-pointer gap-2 rounded-md w-full py-1.5 mt-2 hover:opacity-50 bg-[#ed242e] text-white"
                  onClick={handleLogout}
                >
                  <FaPowerOff />
                  <button className="text-[12px] flex items-center justify-center">
                    خروج
                  </button>
                </div>
              </div>
            )}
          </div>
            ) : (
            <Link to="/login">
            <div className="flex items-center text-gray-900 cursor-pointer hover:opacity-65 duration-150">
              <HiOutlineUser className="text-3xl" />
              <span className="text-sm font-bold">ورود / ثبت نام</span>
            </div>
            </Link>
          )}
            <div className="flex text-gray-900 gap-4">
              <Link to="/likes">
              <div>
                <GoHeart className="text-3xl cursor-pointer hover:opacity-65 duration-150" />
                <span className="flex items-center justify-center bg-[#ed242e] absolute -mr-2 h-4 w-4 text-[8px] text-white rounded-full -mt-9">{likes.length}</span>
              </div>
              </Link>
           
              <Link to="/cart">
              <div>
                <AiOutlineShoppingCart className="text-3xl cursor-pointer hover:opacity-65 duration-150" />
                <span className="flex items-center justify-center bg-[#ed242e] absolute -mr-2 h-4 w-4 text-[8px] text-white rounded-full -mt-9">{cart.length}</span>
              </div>
              </Link>
            
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-[400px] h-screen bg-[#ed242e] text-white shadow-lg z-50 lg:hidden overflow-y-auto">
          <div className="flex justify-between p-4 border-b">
            <button onClick={handleUserClick}>
              <FaUserAlt className="bg-white text-[50px] cursor-pointer text-[#ed242e] rounded-full p-1" />
            </button>
            <button onClick={toggleMenu} className="text-xl font-bold">X</button>
          </div>

          <div className="p-4">
            <ul className="flex flex-col gap-y-5">
              <Link to="/">
                <li className="flex cursor-pointer gap-3 hover:opacity-65 hover:bg-white py-2 px-3 rounded-2xl duration-100 hover:text-[#ed242e]">
                  <IoHomeSharp className="text-2xl" />
                  <span className="text-md">خانه</span>
                </li>
              </Link>
              <Link to="/shop">
                <li className="flex cursor-pointer gap-3 hover:opacity-65 hover:bg-white py-2 px-3 rounded-2xl duration-100 hover:text-[#ed242e]">
                  <FaShopify className="text-2xl" />
                  <span className="text-md">محصولات خارجی</span>
                </li>
              </Link>
              <Link to="/blogs">
                <li className="flex cursor-pointer gap-3 hover:opacity-65 hover:bg-white py-2 px-3 rounded-2xl duration-100 hover:text-[#ed242e]">
                  <IoDocumentText className="text-2xl" />
                  <span className="text-md">بلاگ</span>
                </li>
              </Link>
              <Link to="/discount" >
                <li className="flex cursor-pointer gap-3 hover:opacity-65 hover:bg-white py-2 px-3 rounded-2xl duration-100 hover:text-[#ed242e]">
                  <MdDiscount className="text-xl" />
                  <span className="text-md">تخفیف ها</span>
                </li>
              </Link>
              <Link to="/aboutUs">
                <li className="flex cursor-pointer gap-3 hover:opacity-65 hover:bg-white py-2 px-3 rounded-2xl duration-100 hover:text-[#ed242e]">
                  <FaUsers className="text-2xl" />
                  <span className="text-md">درباره ما</span>
                </li>
              </Link>

              <li className="flex cursor-pointer gap-3 hover:opacity-65 hover:bg-white py-2 px-3 rounded-2xl duration-100 hover:text-[#ed242e]" onClick={toggleCategories}>
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-3">
                    <GiToolbox className="text-2xl" />
                    <span className="text-md">دسته‌بندی‌ها</span>
                  </div>
                  <TbEyePlus className={`text-2xl transition-transform ${isCategoriesOpen ? "rotate-180" : ""}`} />
                </div>
              </li>

              {isCategoriesOpen && (
                <ul className="flex flex-col gap-y-1 mt-3">
                  <li className="flex gap-1 cursor-pointer text-white hover:bg-white hover:text-[#ed242e] hover:opacity-55 py-2 px-1 duration-200 rounded-xl" onClick={() => {
    const target = document.getElementById("arreh-dasti");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }}>
                    <img src="/img/arreh/Untitled-1.pngarrreh.png" className="w-[25px] bg-white rounded-full p-0.5" alt="اره دستی" />
                    <span className="text-sm">اره دستی</span>
                  </li>
                  <li className="flex gap-1 cursor-pointer text-white hover:bg-white hover:text-[#ed242e] hover:opacity-55 py-2 px-1 duration-200 rounded-xl" onClick={() => {
    const target = document.getElementById("arreh-dasti");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }}>
                    <img src="/img/arreh/arrehh.png" className="w-[25px] bg-white rounded-full p-0.5" alt="اره کمانی" />
                    <span className="text-sm">اره کمانی</span>
                  </li>
                  <li className="flex gap-1 cursor-pointer text-white hover:bg-white hover:text-[#ed242e] hover:opacity-55 py-2 px-1 duration-200 rounded-xl" onClick={() => {
    const target = document.getElementById("frez");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }}>
                    <img src="/img/arreh/Untitled-1.pngfrez.png" className="w-[25px] bg-white rounded-full p-0.5" alt="سنگ فرز" />
                    <span className="text-sm">سنگ فرز</span>
                  </li>
                  <li className="flex gap-1 cursor-pointer text-white hover:bg-white hover:text-[#ed242e] hover:opacity-55 py-2 px-1 duration-200 rounded-xl" onClick={() => {
    const target = document.getElementById("barghi");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }}>
                    <img src="/img/arreh/Untitled-1.pngarreh.png" className="w-[25px] bg-white rounded-full p-0.5" alt="اره برقی" />
                    <span className="text-sm">اره برقی</span>
                  </li>
                  <li className="flex gap-1 cursor-pointer text-white hover:bg-white hover:text-[#ed242e] hover:opacity-55 py-2 px-1 duration-200 rounded-xl" onClick={() => {
    const target = document.getElementById("arreh-dasti");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }}>
                    <img src="/img/arreh/Untitled-1.pngachar.png" className="w-[25px] bg-white rounded-full p-0.5" alt="انواع آچار" />
                    <span className="text-sm">انواع آچار</span>
                  </li>
                  <li className="flex gap-1 cursor-pointer text-white hover:bg-white hover:text-[#ed242e] hover:opacity-55 py-2 px-1 duration-200 rounded-xl" onClick={() => {
    const target = document.getElementById("pikor");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }}>
                    <img src="/img/arreh/Untitled-1.pngdrilled.png" className="w-[25px] bg-white rounded-full p-0.5" alt="پیکور" />
                    <span className="text-sm">پیکور</span>
                  </li>
                  <li className="flex gap-1 cursor-pointer text-white hover:bg-white hover:text-[#ed242e] hover:opacity-55 py-2 px-1 duration-200 rounded-xl" onClick={() => {
    const target = document.getElementById("drill");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }}>
                    <img src="/img/arreh/Untitled-1.pngdril.png" className="w-[25px] bg-white rounded-full p-0.5" alt="دریل" />
                    <span className="text-sm">دریل</span>
                  </li>
                </ul>
              )}

              <Link to="/likes">
                <li className="flex cursor-pointer gap-3 hover:opacity-65 hover:bg-white py-2 px-3 rounded-2xl duration-100 hover:text-[#ed242e]">
                  <GoHeart className="text-2xl cursor-pointer" />
                  <span className="text-md">مورد علاقه</span>
                </li>
              </Link>
              <Link to="/cart">
                <li className="flex cursor-pointer gap-3 hover:opacity-65 hover:bg-white py-2 px-3 rounded-2xl duration-100 hover:text-[#ed242e]">
                  <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
                  <span className="text-md">سبد خرید</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
