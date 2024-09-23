import { BsArrow90DegDown } from "react-icons/bs";
const PopularBrands = () => {
  return (
    <div className="">
         <h1 className="sm:text-2xl pr-3 sm:pt-0 pt-5 flex items-center sm:pr-40  font-semibold">بهترین برند های<span className="bg-[#ed242e] mr-1 text-white rounded-full px-4 py-1 flex items-center">Ronix <BsArrow90DegDown/></span></h1>
       <div className="border-b-2 pt-10 mx-auto w-[80%] border-gray-400 ">

       </div>
    <div className="flex items-center justify-center flex-wrap gap-10 mt-10 px-10">
      <img src="/img/Brands/1.png" alt="" className="w-[100px] cursor-pointer hover:opacity-85" />
      <img src="/img/Brands/2.png" alt="" className="w-[100px] cursor-pointer hover:opacity-85" />
      <img src="/img/Brands/3.png" alt="" className="w-[100px] cursor-pointer hover:opacity-85" />
      <img src="/img/Brands/4.png" alt="" className="w-[100px] cursor-pointer hover:opacity-85" />
      <img src="/img/Brands/5.png" alt="" className="w-[100px] cursor-pointer hover:opacity-85" />
      <img src="/img/Brands/6.png" alt="" className="w-[100px] cursor-pointer hover:opacity-85" />
    </div>
    <div className="border-b-2 pt-5 mx-auto w-[80%] border-gray-400">

       </div>
    </div>
  )
}

export default PopularBrands
