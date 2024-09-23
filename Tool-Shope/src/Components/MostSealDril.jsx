import MostSealDrilSlider from "./MostSealDrilSlider"
const MostSealDril = () => {
  return (
    <div className="mt-10" id="drill">
      <h1 className="sm:text-xl pr-3 flex items-center sm:pr-36  font-semibold">پرفروش ترین محصولات<span className="bg-[#ed242e] mr-1 text-white rounded-full px-4 py-1">دریل</span></h1>
      <div className="w-[85%] mx-auto mt-10">
      <MostSealDrilSlider />
      </div>
    </div>
  )
}

export default MostSealDril
