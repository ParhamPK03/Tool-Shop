import { Link } from "react-router-dom";
import  CategoriesSliders  from "../Components/CategoriesSliders"
import { BsArrow90DegDown } from "react-icons/bs";
const ProductCategories = () => {
  return (
    <>
    <div className="mt-20">
        <div >
      <h1 className="sm:text-2xl flex items-center pr-3 sm:pr-20 2lg:mt-40  sm:mt-[550px] font-semibold">دسته بندی محصولات <span className="bg-[#ed242e] mr-1 text-white rounded-full px-4 py-1 flex items-center">Ronix <BsArrow90DegDown/></span></h1>
      <hr className="w-[80%] mt-5 fle items-center mr-20 sm:flex hidden"  />
      </div>
      <div>
        <ul className="flex flex-wrap items-center justify-center md:gap-0 gap-4 gap-y-8 md:justify-between mt-10 w-[80%] m-auto">
            <li className="flex flex-col gap-y-2 items-center ">
                <div className="border-2 border-gray-200 rounded-full w-20 h-20 flex items-center justify-center cursor-pointer hover:bg-gray-100 duration-300">
                <img src="/img/arreh/Untitled-1.pngarrreh.png" alt="" />
                </div>
                <span>اره دستی</span>
            </li>
            <li className="flex flex-col gap-y-2 items-center">
                <div className="border-2 border-gray-200 rounded-full w-20 h-20 flex items-center justify-center cursor-pointer hover:bg-gray-100 duration-300">
                <img src="/img/arreh/Untitled-1.pngarr.png" alt="" />
                </div>
                <span>اره کمانی</span>
            </li>
            <li className="flex flex-col gap-y-2 items-center">
                <div className="border-2 border-gray-200 rounded-full w-20 h-20 flex items-center justify-center cursor-pointer hover:bg-gray-100 duration-300">
                <img src="/img/arreh/Untitled-1.pngfrez.png" alt="" />
                </div>
                <span>سنگ فرز</span>
            </li>
            <li className="flex flex-col gap-y-2 items-center">
                <div >
                    <div className="border-2 border-gray-200 rounded-full w-20 h-20 flex items-center justify-center cursor-pointer hover:bg-gray-100 duration-300">
                <img src="/img/arreh/Untitled-1.pngarreh.png" alt="" />
                    </div>
                </div>
                <span>اره برقی</span>
            </li>
            <li className="flex flex-col gap-y-2 items-center">
                <div className="border-2 border-gray-200 rounded-full w-20 h-20 flex items-center justify-center cursor-pointer hover:bg-gray-100 duration-300">
                <img src="/img/arreh/Untitled-1.pngachar.png" alt="" />
                </div>
                <span>انواع آچار</span>
            </li>
            <li className="flex flex-col gap-y-2 items-center">
                <div className="border-2 border-gray-200 rounded-full w-20 h-20 flex items-center justify-center cursor-pointer hover:bg-gray-100 duration-300">
                <img src="/img/arreh/Untitled-1.pngdrilled.png" alt="" />
                </div>
                <span>پیکور</span>
            </li>
            <li className="flex flex-col gap-y-2 items-center">
                <div className="border-2 border-gray-200 rounded-full w-20 h-20 flex items-center justify-center cursor-pointer hover:bg-gray-100 duration-300">
                <img src="/img/arreh/Untitled-1.pngdril.png" alt="" />
                </div>
                <span>دریل</span>
            </li>

        </ul>
      </div>
    </div>

    
    <div className="bg-[#ed242e] h-[280px] rounded-2xl w-[90%] mx-auto md:mt-56 mt-32 flex 2xs:justify-between justify-center 2xs:pr-20" id="arreh-dasti">
            <div className="hidden flex-col items-center  mt-10 2xs:flex">
                <img src="/img/CategorySlider/9816286.png" className="w-[66px] h-[74px] " alt="" />
                <span className="text-white font-bold text-xl w-[100px]">تخفیف ها</span>
               <Link to="/discount" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}> <button className="bg-white rounded-full font-semibold text-sm ml-5 px-3 py-3 mt-3">مشاهده همه</button></Link>
            </div>
            <div className="-mt-[70px] w-[80%] mx-auto">
        <CategoriesSliders />
        </div>
    </div>
   
    </>
  )
}

export default ProductCategories
