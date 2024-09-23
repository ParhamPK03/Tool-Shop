import MostSealsPikorSlider from "./MostSealsPikorSlider"
const MostSealsPickor = () => {
  return (
    <div className="mt-10" id="pikor">
      <h1 className="sm:text-xl pr-3 flex items-center sm:pr-40 font-semibold">پرفروش ترین محصولات<span className="bg-[#ed242e] mr-1 text-white rounded-full px-4 py-1">پیکور</span></h1>
      <div className="w-[85%] mx-auto mt-10">
      <MostSealsPikorSlider/>
      </div>
    </div>
  )
}

export default MostSealsPickor
