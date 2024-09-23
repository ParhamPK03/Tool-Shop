import MostSealsMotorsSlider from "./MostSealsMotorsSlider"
const MostSealMotors = () => {
  return (
    <div className="mt-10">
      <h1 className="sm:text-xl pr-3 flex items-center sm:pr-32 font-semibold">پرفروش ترین محصولات<span className="bg-[#ed242e] mr-1 text-white rounded-full px-4 py-1">موتور برق</span></h1>
      <div className="w-[85%] mx-auto mt-10">
      <MostSealsMotorsSlider/>
      </div>
    </div>
  )
}

export default MostSealMotors
