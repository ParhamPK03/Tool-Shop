import { useState, useContext, useEffect } from "react";
import { FaUserCog, FaUserEdit, FaBoxOpen } from "react-icons/fa";
import { PiTimer } from "react-icons/pi";
import { MdCancel } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { UserContext } from "../Context/Context";
import {  ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { BsChatSquareText } from "react-icons/bs";
import { IoIosWallet } from "react-icons/io";
import FooterSection from "./FooterSection";
function AccountDetails() {
  const navigate = useNavigate();
  const { user, updateUser } = useContext(UserContext);
  const [activeMenu, setActiveMenu] = useState("profile");
  const {  logoutUser } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    fullName: "",
    address: "",
    postalCode: "",
    homePhone: "",
  });

  useEffect(() => {
    if (user) {
      setUserInfo({
        username: user.username || "",
        email: user.email || "",
        phone: user.phone || "",
        password: user.password || "",
        fullName: user.fullName || "",
        address: user.address || "",
        postalCode: user.postalCode || "",
        homePhone: user.homePhone || "",
      });
    }
  }, [user]);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    updateUser(userInfo);
   
  };

  const handleLogout = () => {
    navigate("/");
    logoutUser();
    
  };

  return (
    <>
    <div className="flex flex-wrap-reverse items-end justify-center gap-x-5 gap-y-5  my-10 mx-10">
     
      <div className="bg-white border border-gray-300 rounded-2xl shadow-md w-[400px]  h-[500px]">
        <h1 className="flex items-center justify-center text-xl text-[#ed242e] mt-3">
          پروفایل کاربری من
        </h1>
        <hr className="mt-2" />
        <div className="flex flex-col pt-7 items-center justify-center  gap-y-3 ">
          <div
            onClick={() => handleMenuClick("profile")}
            className={`flex items-center  px-2 sm:w-[350px] xs:w-[300px] h-[40px] border-gray-200 border rounded-xl shadow-sm gap-1 cursor-pointer ${
              activeMenu === "profile" ? "bg-gray-300 text-white " : "text-gray-600"
            }`}
          >
            <FaUserCog className="text-2xl " />
            <span>پروفایل</span>
          </div>
          <div
            onClick={() => handleMenuClick("editProfile")}
            className={`flex items-center  px-2 sm:w-[350px] xs:w-[300px] h-[40px] border-gray-200 border rounded-xl shadow-sm gap-1 cursor-pointer ${
              activeMenu === "editProfile" ? "bg-gray-300 text-white " : "text-gray-600"
            }`}
          >
            <FaUserEdit className="text-2xl" />
            <span>ویرایش پروفایل</span>
          </div>
          <div
            onClick={() => handleMenuClick("delivered")}
            className={`flex items-center  px-2 sm:w-[350px] xs:w-[300px] h-[40px] border-gray-200 border rounded-xl shadow-sm gap-1 cursor-pointer ${
              activeMenu === "delivered" ? "bg-gray-300 text-white " : "text-gray-600"
            }`}
          >
            <FaBoxOpen className=" text-2xl" />
            <span>تحویل داده شده</span>
          </div>
          <div
            onClick={() => handleMenuClick("processing")}
            className={`flex items-center  px-2 sm:w-[350px] xs:w-[300px]   h-[40px] border-gray-200 border rounded-xl shadow-sm gap-1 cursor-pointer ${
              activeMenu === "processing" ? "bg-gray-300 text-white " : "text-gray-600"
            }`}
          >
            <PiTimer className=" text-2xl" />
            <span>در حال پردازش</span>
          </div>
          <div
            onClick={() => handleMenuClick("cancelled")}
            className={`flex items-center  px-2 sm:w-[350px] xs:w-[300px] h-[40px] border-gray-200 border rounded-xl shadow-sm gap-1 cursor-pointer ${
              activeMenu === "cancelled" ? "bg-gray-300 text-white " : "text-gray-600"
            }`}
          >
            <MdCancel className=" text-2xl" />
            <span>لغو شده</span>
          </div>
          <div
            onClick={() => handleMenuClick("ticket")}
            className={`flex items-center  px-2 sm:w-[350px] xs:w-[300px] h-[40px] border-gray-200 border rounded-xl shadow-sm gap-1 cursor-pointer ${
              activeMenu === "ticket" ? "bg-gray-300 text-white " : "text-gray-600"
            }`}
          >
             
            <BsChatSquareText className=" text-2xl" />
            <span>تیکت ها</span>
          </div>
          <div
            onClick={() => handleMenuClick("wallet")}
            className={`flex items-center  px-2 sm:w-[350px] xs:w-[300px] h-[40px] border-gray-200 border rounded-xl shadow-sm gap-1 cursor-pointer ${
              activeMenu === "wallet" ? "bg-gray-300 text-white " : "text-gray-600"
            }`}
          >
            <IoIosWallet className=" text-2xl" />
            <span>کیف پول</span>
          </div>
          <div
            onClick={handleLogout}
            className={`flex items-center  px-2 sm:w-[350px] xs:w-[300px] h-[40px] border-gray-200 border rounded-xl shadow-sm gap-1 cursor-pointer ${
              activeMenu === "logout" ? "bg-gray-300 text-white " : "text-gray-600"
            }`}
          >
            <IoLogOutOutline className="text-2xl " />
            <span className="">خروج از حساب</span>
          </div>
          
        </div>
      </div>

     
      <div className="bg-white border border-gray-300 rounded-2xl shadow-md w-[1000px] pb-5 min-h-[500px]">
        <h1 className="text-[#ed242e] text-xl font-serif mt-2 mr-2">
          اطلاعات کاربری
        </h1>
        <hr className="border border-[#ed242e] w-[120px] mr-2" />
        <hr className="mt-2 border border-[#ed242e] w-[200px] mr-2" />
        {activeMenu === "profile" && (
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 mt-10">
            <div className="flex flex-col items-start gap-y-2">
              <span className="text-sm">نام کاربری :</span>
              <input
                type="text"
                name="username"
                value={userInfo.username}
                onChange={handleInputChange}
                className="sm:sm:w-[400px] xs:w-[300px]  rounded-md h-[40px] shadow-md border border-gray-300 placeholder:text-[14px] pr-2 outline-none"
                readOnly
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="text-sm">ایمیل :</span>
              <input
                type="text"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
                className="sm:w-[400px] xs:w-[300px] rounded-md h-[40px] shadow-md border border-gray-300 placeholder:text-[14px] pr-2 outline-none"
                readOnly
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="text-sm">شماره تماس :</span>
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
                className="sm:w-[400px] xs:w-[300px] rounded-md h-[40px] shadow-md border border-gray-300 placeholder:text-[14px] pr-2 outline-none"
                readOnly
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="text-sm">رمز عبور:</span>
              <input
                type="number"
                name="password"
                value={userInfo.password}
                onChange={handleInputChange}
                className="sm:w-[400px] xs:w-[300px] rounded-md h-[40px] shadow-md border border-gray-300 placeholder:text-[14px] pr-2 outline-none"
                readOnly
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="text-sm">نام کامل :</span>
              <input
              placeholder="در این بخش چیزی وارد نکرده اید ..."
                type="text"
                name="fullName"
                value={userInfo.fullName}
                onChange={handleInputChange}
                className="sm:w-[400px] xs:w-[300px] rounded-md h-[40px] shadow-md border border-gray-300 placeholder:text-[12px] placeholder:text-red-500 pr-2 outline-none"
                readOnly
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="text-sm">آدرس :</span>
              <input
               placeholder="در این بخش چیزی وارد نکرده اید ..."
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleInputChange}
                className="sm:w-[400px] xs:w-[300px] rounded-md h-[40px] shadow-md border border-gray-300 placeholder:text-[12px] placeholder:text-red-500 pr-2 outline-none"
                readOnly
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="text-sm">کد پستی :</span>
              <input
               placeholder="در این بخش چیزی وارد نکرده اید ..."
                type="text"
                name="postalCode"
                value={userInfo.postalCode}
                onChange={handleInputChange}
                className="sm:w-[400px] xs:w-[300px] rounded-md h-[40px] shadow-md border border-gray-300 placeholder:text-[12px] placeholder:text-red-500 pr-2 outline-none"
                readOnly
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="text-sm">تلفن منزل :</span>
              <input
               placeholder="در این بخش چیزی وارد نکرده اید ..."
                type="text"
                name="homePhone"
                value={userInfo.homePhone}
                onChange={handleInputChange}
                className="sm:w-[400px] xs:w-[300px] rounded-md h-[40px] shadow-md border border-gray-300 placeholder:text-[12px] placeholder:text-red-500 pr-2 outline-none"
                readOnly
              />
            </div>
          </div>
        )}

        {activeMenu === "editProfile" && (
          
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 mt-10">
            <div className="flex flex-col items-start gap-y-2">
              <span className="text-sm">نام کاربری :</span>
              <input
                type="text"
                name="username"
                value={userInfo.username}
                onChange={handleInputChange}
                className="sm:w-[400px] xs:w-[300px] rounded-md h-[40px] shadow-md border border-gray-300 placeholder:text-[14px] pr-2 outline-none"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="text-sm">ایمیل :</span>
              <input
                type="text"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
                className="sm:w-[400px] xs:w-[300px] rounded-md h-[40px] shadow-md border border-gray-300 placeholder:text-[14px] pr-2 outline-none"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="text-sm">شماره تماس :</span>
              <input
                type="number"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
                className="sm:w-[400px] xs:w-[300px] rounded-md h-[40px] shadow-md border border-gray-300 placeholder:text-[14px] pr-2 outline-none"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="text-sm">رمز عبور:</span>
              <input
                type="number"
                name="password"
                value={userInfo.password}
                onChange={handleInputChange}
                className="sm:w-[400px] xs:w-[300px] rounded-md h-[40px] shadow-md border border-gray-300 placeholder:text-[14px] pr-2 outline-none"
                
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="text-sm">نام کامل :</span>
              <input
              placeholder="در این بخش چیزی وارد نکرده اید ..."
                type="text"
                name="fullName"
                value={userInfo.fullName}
                onChange={handleInputChange}
                className="sm:w-[400px] xs:w-[300px] rounded-md h-[40px] shadow-md border border-gray-300 placeholder:text-[12px] placeholder:text-red-500 pr-2 outline-none"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="text-sm">آدرس :</span>
              <input
              placeholder="در این بخش چیزی وارد نکرده اید ..."
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleInputChange}
                className="sm:w-[400px] xs:w-[300px] rounded-md h-[40px] shadow-md border border-gray-300 placeholder:text-[12px] placeholder:text-red-500 pr-2 outline-none"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="text-sm">کد پستی :</span>
              <input
              placeholder="در این بخش چیزی وارد نکرده اید ..."
                type="number"
                name="postalCode"
                value={userInfo.postalCode}
                onChange={handleInputChange}
                className="sm:w-[400px] xs:w-[300px] rounded-md h-[40px] shadow-md border border-gray-300 placeholder:text-[12px] placeholder:text-red-500 pr-2 outline-none"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="text-sm">تلفن منزل :</span>
              <input
              placeholder="در این بخش چیزی وارد نکرده اید ..."
                type="number"
                name="homePhone"
                value={userInfo.homePhone}
                onChange={handleInputChange}
                className="sm:w-[400px] xs:w-[300px] rounded-md h-[40px] shadow-md border border-gray-300 placeholder:text-[12px] placeholder:text-red-500 pr-2 outline-none"
              />
            </div>
            <div className="">
              <button
                onClick={handleSaveChanges}
                className="bg-[#ed242e]  px-4 py-2 rounded-md shadow-md text-white"
              >
                ذخیره تغییرات
              </button>
            </div>
          </div>
          
        )}
       {activeMenu === "delivered" && (
        <div className="flex flex-wrap gap-y-5 mt-2">
          <div className="border border-gray-300 lg:w-[900px] sm:w-[600px] m-auto min-h-[200px] rounded-2xl">
              <div className="flex  py-10 justify-center lg:gap-20 gap-x-5 xs:flex-wrap sm:flex-nowrap xs:gap-y-5 sm:gap-y-0  px-10 items-center">
                <img src="/img/WorkToolss/Untitled-1.png022.png" className="w-[150px] h-[150px] mt-10 rounded-2xl" alt="" />
                <div className="flex flex-col gap-y-2">
                <span className="text-lg font-semibold ">چکش تخریب برقی 6 کیلویی 10 ژول</span>
                <span className=" text-sm">25,000,000 تومان</span>
                </div>
                <div className="flex flex-col gap-y-3">
                <span className="">در تاریخ :</span>
                <span className="text-sm ">1402/10/05</span>
                </div>
              </div>
          </div>
          <div className="border border-gray-300  lg:w-[900px] sm:w-[600px] m-auto min-h-[200px]  rounded-2xl">
          <div className="flex  py-10 justify-center lg:gap-28 gap-x-[98px] xs:flex-wrap sm:flex-nowrap xs:gap-y-5 sm:gap-y-0  px-10 items-center">
            <img src="/img/WorkToolss/Untitled-1.png030.png" className="w-[150px] h-[150px] mt-10 rounded-2xl" alt="" />
            <div className="flex flex-col gap-y-2">
            <span className="text-lg font-semibold ">اره زنجیری بنزینی آروا 50 سانتی متر	</span>
            <span className=" text-sm">63,000,000 تومان</span>
            </div>
            <div className="flex flex-col gap-y-3">
            <span className="">در تاریخ :</span>
            <span className="text-sm ">1403/5/11</span>
            </div>
          </div>
      </div>
      </div>
          

        )}
        {activeMenu === "processing" && (
          <div  className="flex items-center justify-center">
              <h1 className=" sm:text-2xl xs:text-md mt-40">در حال حاضر درحال پردازشی مشاهده نمیشود!</h1>
          </div>

        )}
        {activeMenu === "cancelled" && (
           <div className="flex flex-col gap-y-5 mt-2">
           <div className="border border-gray-300  lg:w-[900px] sm:w-[600px] m-auto min-h-[200px]  rounded-2xl">
               <div className="flex  py-10 justify-center lg:gap-20 gap-x-5 xs:flex-wrap sm:flex-nowrap xs:gap-y-5 sm:gap-y-0  px-10 items-center">
                 <img src="/img/WorkToolss/Untitled-1.png017.png" className="w-[150px] h-[150px] mt-10 rounded-2xl" alt="" />
                 <div className="flex flex-col gap-y-2">
                 <span className="text-lg font-semibold  ">موتور برق 17000 مدل تایلندی new</span>
                 <span className=" text-sm">13,500,000 تومان</span>
                 </div>
                 <div className="flex flex-col gap-y-3">
                 <span className="">در تاریخ :</span>
                 <span className="text-sm ">1401/11/05</span>
                 </div>
               </div>
           </div>
           <div className="border border-gray-300  lg:w-[900px] sm:w-[600px] m-auto min-h-[200px]  rounded-2xl">
           <div className="flex  py-10 justify-center lg:gap-20 gap-x-5 xs:flex-wrap sm:flex-nowrap xs:gap-y-5 sm:gap-y-0  px-10 items-center">
             <img src="/img/WorkToolss/Untitled-1.png021.png" className="w-[150px] h-[150px] mt-10 rounded-2xl" alt="" />
             <div className="flex flex-col gap-y-2">
             <span className="text-lg font-semibold ">چکش تخریب برقی 6 کیلویی 10 ژول</span>
             <span className=" text-sm">7,300,000 تومان</span>
             </div>
             <div className="flex flex-col gap-y-3">
             <span className="">در تاریخ :</span>
             <span className="text-sm ">1403/2/15</span>
             </div>
           </div>
       </div>
       </div>

        )}
        {activeMenu === "ticket" && (
          <div  className="flex items-center justify-center">
          <h1 className=" sm:text-2xl xs:text-md mt-40">در حال حاضر تیکتی مشاهده نمیشود!</h1>
      </div>

        )}
        {activeMenu === "wallet" && (
          <div className="flex flex-col items-center mt-16">
            <img src="/img/Likes/Untitled-1.pngw.png" className="w-[200px] flex items-center justify-center m-auto" alt="" />
            <p className="text-xl font-serif ">کیف پول شما خالی است</p>
          </div>

        )}
      </div>
      <ToastContainer />
    </div>
    <div>
      <FooterSection/>
    </div>
    </>
  );
}

export default AccountDetails;
