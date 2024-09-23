import { BsArrow90DegDown } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const LastWords = () => {
  return (
    <div>
         <h1 className="sm:text-xl pr-3 pt-5 flex items-center sm:pr-32  font-bold">آخــریــن مــقـالـات <BsArrow90DegDown className="text-[#ed242e] text-2xl"/></h1>
    
    <div className="flex items-center justify-center flex-wrap gap-5 mt-10">
      <Link to="/oldvsNew">
      <div className="flex flex-col gap-3 text-sm"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img src="/img/LastWords/371749_2.pngwsw.png" className="w-[300px] h-[170px] cursor-pointer hover:opacity-85 rounded-lg" alt="" />
        <span className="font-semibold">تفاوت ابزار های قدیم و جدید</span>
        <p className="text-red-500 font-semibold text-md flex  gap-x-2 cursor-pointer hover:opacity-60 hover:gap-x-8 duration-300">مشاهده بیشتر <FaArrowLeftLong className="mt-1"/></p>
      </div>
      </Link>
      <Link to="/ronixBadThings">
      <div className="flex flex-col gap-3 text-sm"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img src="/img/LastWords/nailewr-stapler-cover-.webp" className="w-[300px] h-[170px] cursor-pointer hover:opacity-85 rounded-lg" alt="" />
        <span className="font-semibold">معایب میخکوب های برقی شارژی و انواع آن</span>
        <p className="text-red-500 font-semibold text-md flex  gap-x-2 cursor-pointer hover:opacity-60 hover:gap-x-8 duration-300">مشاهده بیشتر <FaArrowLeftLong className="mt-1"/></p>
      </div>
      </Link>
      <Link to="/difftentsDrill">
      <div className="flex flex-col gap-3 text-sm"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img src="/img/LastWords/638180908947346933.webp" className="w-[300px] h-[170px] cursor-pointer hover:opacity-85 rounded-lg" alt="" />
        <span className="font-semibold">تفاوت دریل شارژی و دریل معمولی چیست؟</span>
        <p className="text-red-500 font-semibold text-md flex  gap-x-2 cursor-pointer hover:opacity-60 hover:gap-x-8 duration-300">مشاهده بیشتر <FaArrowLeftLong className="mt-1"/></p>
      </div>
      </Link>
      <Link to="/recycleTools">
      <div className="flex flex-col gap-3 text-sm"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img src="/img/LastWords/blog-new-5-min.jpg" className="w-[300px] h-[170px] cursor-pointer hover:opacity-85 rounded-lg" alt="" />
        <span className="font-semibold">راهکار های افزایش طول عمر ابزار آلات برقی</span>
        <p className="text-red-500 font-semibold text-md flex  gap-x-2 cursor-pointer hover:opacity-60 hover:gap-x-8 duration-300">مشاهده بیشتر <FaArrowLeftLong className="mt-1"/></p>
      </div>
      </Link>
    </div>
    </div>
  )
}

export default LastWords
