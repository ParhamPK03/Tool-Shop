
const MostSealBox = ({img,price,name}) => {
  return (
    <div className="">
    <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-3 w-[240px] h-[300px]">
      <div className="flex flex-col gap-y-2 items-center">
        <div className="relative">
     <img src={img} className="w-[209px] h-[209px] cursor-pointer bg-gray-100 p-1" alt="" />
     
     </div>
     <p className="text-sm font-semibold">{name}</p>
     <div className="flex items-center gap-2">
        <span className="text-sm text-[#ed242e] font-semibold">{price} تومان</span>
     </div>
      </div>
    </div>
    </div>
  )
}

export default MostSealBox
