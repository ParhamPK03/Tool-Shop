import MostSealJoshSlider from "./MostSealJoshSlider"

const MostSealJosh = () => {
  return (
    <div className="mt-10">
      <h1 className="sm:text-xl pr-3 flex items-center sm:pr-36 mt-20 font-semibold">پرفروش ترین محصولات<span className="bg-[#ed242e] mr-1 text-white rounded-full px-4 py-1">جوش</span></h1>
      <div className="w-[90%] mx-auto mt-10">
      <MostSealJoshSlider/>
      </div>
    </div>
  )
}

export default MostSealJosh
