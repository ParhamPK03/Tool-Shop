
const CategoriesSliderBox = ({img,off,price,oldprice,name}) => {
  return (
    
    <div className="">
    <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-3 w-[240px] h-[300px]">
      <div className="flex flex-col gap-y-2 items-center">
        <div className="relative">
     <img src={img} className="w-[209px] h-[209px] cursor-pointer" alt="" />
     <span className="bg-[#ed242e] font-semibold w-[50px] h-[50px] flex items-center rounded-b-full absolute top-0 right-2 justify-center text-white">{off} %</span>
     </div>
     <p className="text-sm font-semibold">{name}</p>
     <div className="flex items-center gap-2">
        <span className="text-gray-400 text-sm"><del>{oldprice} تومان</del></span>
        <span className="text-sm text-[#ed242e] font-semibold">{price} تومان</span>
     </div>
      </div>
    </div>
    </div>
    
  )
}

export default CategoriesSliderBox
