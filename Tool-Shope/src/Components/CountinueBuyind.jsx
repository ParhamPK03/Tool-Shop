import { useContext, useState } from "react";
import { UserContext } from "../Context/Context";
import { Link } from "react-router-dom";
import FooterSection from "../Components/FooterSection"
const ContinuBuying = () => {
  const { totalPrice } = useContext(UserContext);
  
  const [selectedDay, setSelectedDay] = useState(null); 

  const shippingCost = "10".padStart(3, '0'); 
  const totalWithShipping = totalPrice + "," + shippingCost + ","; 

  const days = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه"];

  const handleDayClick = (day) => {
    setSelectedDay(day); 
  };

  return (
    <>
    <div className="flex h-screen flex-wrap gap-y-6 gap-x-10 items-start xs:justify-center px-10 my-10">
      <form action="">
        <div className="bg-white lg:w-[1000px] sm:w-[600px] xs:w-[400px] min-h-[85vh] pb-10 shadow-lg rounded-2xl ">
          <div className="flex items-center justify-center mt-3 bg-[#ed242e] text-white h-[50px] rounded-t-xl">
            <h1 className="">اطلاعات خودرا وارد نمایید</h1>
          </div>  
          <div className="flex flex-wrap justify-center px-10 gap-x-5 gap-y-8 pt-10 text-sm text-[#ed242e]">
            <div>
              <span>نام:</span>
              <br />
              <input className="sm:w-[400px] xs:w-[330px] mt-2 h-[40px] bg-white shadow-lg placeholder:pr-2 rounded-lg placeholder:p-1 outline-none placeholder:text-black border text-gray-600 pr-3 border-gray-300" type="text" />
            </div>
            <div>
              <span>نام خانوادگی:</span>
              <br />
              <input className="sm:w-[400px] xs:w-[330px] mt-2 h-[40px] bg-white shadow-lg placeholder:pr-2 rounded-lg placeholder:p-1 outline-none text-gray-600 pr-3 placeholder:text-black border border-gray-300" type="text" />
            </div>
            <div>
              <span>ایمیل:</span>
              <br />
              <input className="sm:w-[400px] xs:w-[330px] mt-2 h-[40px] bg-white shadow-lg placeholder:pr-2 rounded-lg placeholder:p-1 outline-none text-gray-600 pr-3 placeholder:text-black border border-gray-300" type="text" />
            </div>
            <div>
              <span>شماره تماس:</span>
              <br />
              <input className="sm:w-[400px] xs:w-[330px] mt-2 h-[40px] bg-white shadow-lg placeholder:pr-2 rounded-lg outline-none placeholder:p-1 text-gray-600 pr-3 placeholder:text-black border border-gray-300" type="text" />
            </div>
            <div>
              <span>کد پستی:</span>
              <br />
              <input className="sm:w-[400px] xs:w-[330px] mt-2 h-[40px] bg-white shadow-lg placeholder:pr-2 rounded-lg outline-none placeholder:p-1 text-gray-600 pr-3 placeholder:text-black border border-gray-300" type="text" />
            </div>
            <div>
              <span>شماره منزل:</span>
              <br />
              <input className="sm:w-[400px] xs:w-[330px] mt-2 h-[40px] bg-white shadow-lg placeholder:pr-2 rounded-lg outline-none placeholder:p-1 text-gray-600 pr-3 placeholder:text-black border border-gray-300" type="text" />
            </div>
            <div>
              <span>آدرس:</span>
              <br />
              <input className="lg:w-[805px] sm:w-[380px] xs:w-[330px] mt-2 h-[40px] bg-white shadow-lg placeholder:pr-2 rounded-lg placeholder:p-1 text-gray-600 pr-3 outline-none placeholder:text-black border border-gray-300" type="text" />
            </div>
            <br />
            <div>
              <span>توضیحات:</span>
              <br />
              <input className="lg:w-[845px] sm:w-[400px] xs:w-[330px] mt-2 h-[150px] bg-white shadow-lg placeholder:pr-2 rounded-lg placeholder:p-1 text-gray-600 pr-3 outline-none placeholder:text-black border border-gray-300" type="text " />
            </div>
          </div>
        </div>
      </form>

      <div className="flex flex-col gap-y-5 pt-4">
        <div className="bg-white w-[350px] h-[350px] rounded-xl shadow-lg">
          <h1 className="bg-[#ed242e] rounded-t-xl h-[40px] text-white flex items-center justify-center text-sm">
            انتخاب تاریخ ارسال
          </h1>
          <div className="text-sm grid grid-cols-3 justify-items-center gap-y-5 pt-5 ">
            {days.map((day, index) => (
              <span
                key={index}
                onClick={() => handleDayClick(day)}
                className={`cursor-pointer hover:opacity-50 w-20 h-8 rounded-xl  flex items-center justify-center ${
                  selectedDay === day ? "bg-[#ed242e] text-white" : "bg-red-500 text-white"
                }`}
              >
                {day}
              </span>
            ))}
           
          </div>
          <div className="flex items-center justify-center mt-5 h-[40px] w-[100%] m-auto  text-[#ed242e] text-sm">
              <h1 className="bg-[#ed242e] text-white rounded-xl p-3">انتخاب روش ارسال</h1>
            </div>
            <div className="flex flex-col text-sm pt-5">
              <span className="bg-red-500 text-white cursor-pointer h-[30px] flex w-[80%] m-auto rounded-lg items-center justify-center hover:opacity-50">ارسال با پست</span>
              <span className="bg-red-500 text-white cursor-pointer h-[30px] flex w-[80%] m-auto rounded-lg mt-3 items-center justify-center hover:opacity-50">ارسال با پست پیشتاز</span>
              
            </div>
        </div>

        <div className="bg-white w-[350px] h-[250px] rounded-xl shadow-lg">
          <h1 className="flex justify-center bg-[#ed242e] text-white rounded-t-xl h-[50px] items-center">
            محاسابت سبد خرید شما
          </h1>
          <div className="flex gap-10 justify-center text-md text-gray-700 pt-10">
            <div className="flex flex-col gap-3 items-start">
              <span className="text-[#ed242e]">قیمت کل :</span>
              <span className="text-teal-800">هزینه ارسال :</span>
              <span className="text-red-600">قیمت مجموع :</span>
            </div>
            <div className="flex flex-col gap-3 items-end">
              <span>{totalPrice.toLocaleString()},000,000 تومان</span>
              <span>10,000 تومان</span> 
              <span>{totalWithShipping.toLocaleString()}000 تومان</span> 
            </div>
          </div>
          <div>
            <Link to="/continuBuying">
              <span className="text-white text-sm bg-[#ed242e] flex items-center justify-center w-[200px] h-[35px] hover:opacity-70 m-auto rounded-md mt-5 shadow-md cursor-pointer">
                ادامه جهت تصویه حساب
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <FooterSection/>
    </>
  );
};

export default ContinuBuying;
