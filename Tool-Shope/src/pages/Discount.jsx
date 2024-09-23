import CategoriesSliders from "../Components/CategoriesSliders"
import { useState } from "react";
import { GiToolbox } from "react-icons/gi";
import { CategoriesSlider } from "../assets/Infoes";
import { BsArrow90DegDown } from "react-icons/bs";
import { Link } from 'react-router-dom';
import FooterSection from "../Components/FooterSection"
const Discount = () => {
  const [selectedCategory, setSelectedCategory] = useState("همه تجهیزات");

 
  const filteredProducts = selectedCategory === "همه تجهیزات" 
    ? CategoriesSlider 
    : CategoriesSlider.filter(item => item.category === selectedCategory);
  return (
    <>
    <div>
    
<div className="mt-20">
      <h1 className="sm:text-2xl pr-3 flex items-center sm:pr-24 mt-20  font-semibold">تخفیفات محصولات<span className="bg-[#ed242e] flex items-center mr-1 text-white rounded-full px-4 py-1">Ronix <BsArrow90DegDown/></span></h1>
      <div className="flex flex-wrap gap-5  px-3 justify-center mt-20">
        <div 
          className={`flex gap-2 cursor-pointer ${selectedCategory === "همه تجهیزات" ? 'border-b-[3px] border-[#ed242e]' : ''}`}
          onClick={() => setSelectedCategory("همه تجهیزات")}
        >
          <GiToolbox className="w-[30px] h-[30px] text-[#ed242e]" />
          <span className="text-gray-500 text-sm font-bold">همه تجهیزات</span>
        </div>

        <div 
          className={`flex gap-2 cursor-pointer ${selectedCategory === "اره دستی" ? 'border-b-[3px] border-[#ed242e]' : ''}`}
          onClick={() => setSelectedCategory("اره دستی")}
        >
          <img src="/img/arreh/Untitled-1.pngarrreh.png" className="w-[40px] h-[40px]" alt="" />
          <span className="text-gray-500 text-sm font-bold">اره دستی</span>
        </div>

        <div 
          className={`flex gap-2 cursor-pointer ${selectedCategory === "سنگ فرز" ? 'border-b-[3px] border-[#ed242e]' : ''}`}
          onClick={() => setSelectedCategory("سنگ فرز")}
        >
          <img src="/img/arreh/Untitled-1.pngfrez.png" className="w-[40px] h-[40px]" alt="" />
          <span className="text-gray-500 text-sm font-bold">سنگ فرز</span>
        </div>

        <div 
          className={`flex gap-2 cursor-pointer ${selectedCategory === "اره برقی" ? 'border-b-[3px] border-[#ed242e]' : ''}`}
          onClick={() => setSelectedCategory("اره برقی")}
        >
          <img src="/img/arreh/Untitled-1.pngarreh.png" className="w-[40px] h-[40px]" alt="" />
          <span className="text-gray-500 text-sm font-bold">اره برقی</span>
        </div>

        <div 
          className={`flex gap-2 cursor-pointer ${selectedCategory === "آچار" ? 'border-b-[3px] border-[#ed242e]' : ''}`}
          onClick={() => setSelectedCategory("آچار")}
        >
          <img src="/img/arreh/Untitled-1.pngachar.png" className="w-[40px] h-[40px]" alt="" />
          <span className="text-gray-500 text-sm font-bold">آچار</span>
        </div>

        <div 
          className={`flex gap-2 cursor-pointer ${selectedCategory === "پیکور" ? 'border-b-[3px] border-[#ed242e]' : ''}`}
          onClick={() => setSelectedCategory("پیکور")}
        >
          <img src="/img/arreh/Untitled-1.pngdrilled.png" className="w-[40px] h-[40px]" alt="" />
          <span className="text-gray-500 text-sm font-bold">پیکور</span>
        </div>

        <div 
          className={`flex gap-2 cursor-pointer ${selectedCategory === "دریل" ? 'border-b-[3px] border-[#ed242e]' : ''}`}
          onClick={() => setSelectedCategory("دریل")}
        >
          <img src="/img/arreh/Untitled-1.pngdril.png" className="w-[40px] h-[40px]" alt="" />
          <span className="text-gray-500 text-sm font-bold">دریل</span>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-5 lg:px-32">
       
        {filteredProducts.slice(0,8).map((item, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-md p-3 w-[300px] h-[360px] ">
            <Link to={`/product/${item.id}`}>
            <div className="flex flex-col gap-y-2 items-center">
              <div className="relative">
                <img src={item.img} className="w-[269px] h-[269px] cursor-pointer" alt={item.name} />
                <span className="bg-[#ed242e] font-semibold w-[50px] h-[50px] flex items-center rounded-b-full absolute top-0 right-2 justify-center text-white">
                  {item.off} %
                </span>
              </div>
              <p className="text-sm font-semibold">{item.name}</p>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm"><del>{item.oldprice} تومان</del></span>
                <span className="text-sm text-[#ed242e] font-semibold">{item.price} تومان</span>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>

       <div className="bg-[#ed242e] h-[280px] rounded-2xl w-[90%] mx-auto md:mt-56 mt-32 flex 2xs:justify-between justify-center 2xs:pr-20">
            <div className="hidden flex-col items-center  mt-10 2xs:flex">
                <img src="/img/CategorySlider/9816286.png" className="w-[66px] h-[74px] " alt="" />
                <span className="text-white font-bold text-xl w-[100px]">تخفیف ها</span>
                <button className="bg-white rounded-full font-semibold text-sm ml-5 px-3 py-3 mt-3">مشاهده همه</button>
            </div>
            <div className="-mt-[70px] w-[80%] mx-auto">
        <CategoriesSliders />
        </div>
    </div>
    </div>
    <FooterSection/>
    </>
  )
}

export default Discount
