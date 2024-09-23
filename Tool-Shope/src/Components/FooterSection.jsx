import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
const FooterSection = () => {
  return (
    <>
    <div className="mt-20">
    <div className="flex flex-wrap items-center 2lg:justify-between justify-center  gap-y-5 px-5 md:px-16 py-10 min-h-[180px] bg-slate-50 border-t-2 rounded-xl border-gray-100">
        <div className="flex flex-col items-start gap-3">
            <span className="bg-white text-[#ed242e] rounded-full p-2 font-bold">پشتیبانی</span>
            
            <p>تلفن : 12345678-021  <span className="mr-4">|</span>
                <span className="mr-4">  شنبه تا چهارشنبه ۸ الی ۲۱ - پنجشنبه 8 الی ۲۰:۳۰</span>
          </p>
            <p>ایمیل : info@example.ir</p>
        </div>
        <div className="flex flex-wrap items-center  gap-10">
            <div className="flex flex-col items-center gap-2">
                <img src="/img/Sending/24-hours.png" className="w-[60px] h-[60px]" alt="" />
                <span>پشتیبانی 24 ساعته</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <img src="/img/Sending/checked.png" className="w-[60px] h-[60px]" alt="" />
                <span>تضمین اصالت کالا</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <img src="/img/Sending/free-delivery.png" className="w-[60px] h-[60px]" alt="" />
                <span>ارسال سریع</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <img src="/img/Sending/secure-payment.png" className="w-[60px] h-[60px]" alt="" />
                <span>پرداخت  مطمئن</span>
            </div>
        </div>
    </div>
    <div className="flex flex-wrap gap-y-5 items-center justify-center xs:justify-between px-16 gap-x-5 py-10 bg-[#ed242e] min-h-[250px] rounded-xl text-white">
        <div className="flex flex-col items-start gap-y-2">
            <span className="font-semibold text-[#ed242e] bg-white rounded-md p-1 text-md">درباره ما</span>
            <p className="sm:w-[400px] text-md mt-2 leading-8">محصولات خارجی رونیکس یک مجموعه تجاریست که به فروش محصولات و ابزارآلات صنعتی مشغول است و این مجموعه متشکل از 21 شعبه داخلی و 1350 پرسنل میباشد</p>
        </div>
        <div className="flex flex-col items-start gap-y-2">
            <span className="font-semibold text-[#ed242e] bg-white text-md rounded-md p-1">لینک های مفید</span>
            <ul className="mt-2 flex flex-col items-start gap-1">
                <Link to="/discount" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><li className="cursor-pointer hover:underline ">تخفیف ها</li></Link>
                <Link to="/shop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><li className="cursor-pointer hover:underline ">محصولات خارجی</li></Link>
                <Link to="/discount" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><li className="cursor-pointer hover:underline ">محصولات رونیکس</li></Link>
                <li></li>
            </ul>
        </div>
        <div className="flex flex-col items-center gap-y-2">
            <span className="font-semibold text-[#ed242e] bg-white rounded-md p-1 text-md">دسترسی سریع</span>
            <ul className="mt-2 flex flex-col items-start gap-1">
               <Link to="/blogs" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}> <li className="cursor-pointer hover:underline ">بلاگ ها</li></Link>
               <Link to="/aboutUs" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}> <li className="cursor-pointer hover:underline ">درباره ما</li></Link>
               <Link to="/wallet"> <li className="cursor-pointer hover:underline ">کیف پول</li></Link>
            </ul>
        </div>
        <div className="flex flex-col items-start gap-y-2">
            <span className="font-semibold text-[#ed242e] bg-white rounded-md p-1 text-md">راه های ارتباطی</span>
            <ul className="mt-2 flex flex-col items-start gap-3">
                <li className="flex items-center gap-2 cursor-pointer">ارتباط از طریق<FaTelegram className="text-2xl" /></li>
                <li className="flex items-center gap-2 cursor-pointer">ارتباط از طریق<IoLogoWhatsapp className="text-2xl"/></li>
                <li className="flex items-center gap-2 cursor-pointer">ارتباط از طریق<FaSquareInstagram className="text-2xl"/></li>
            </ul>
        </div>
    </div>
    <div className="mt-1 bg-[#ed242e] h-[60px] rounded-xl">
        <p className="flex items-center justify-center text-white text-md xs:text-xl font-semibold mx-auto pt-3"> | Developed By : Parham Pourkhani |</p>
    </div>
    </div>
    </>
  )
}

export default FooterSection
