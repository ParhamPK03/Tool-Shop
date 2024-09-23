import MostSealProductsSlider from "./MostSealProductsSlider"
import { BsArrow90DegDown } from "react-icons/bs";
const MostSealProducts = () => {
  return (
    <div className="" id="frez">
       <h1 className="sm:text-xl pr-3 flex items-center sm:pr-36  font-semibold">پرفروش ترین محصولات<span className="bg-[#ed242e] mr-1 text-white rounded-full px-4 py-1 flex items-center">Ronix <BsArrow90DegDown /></span></h1>
      <div className="w-[85%] mx-auto mt-10">
      <MostSealProductsSlider/>
      </div>
    </div>
  )
}

export default MostSealProducts
