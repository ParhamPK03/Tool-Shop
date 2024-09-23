import OtherProductsSlider from "./OtherProductsSlider"
import { GiGorilla } from "react-icons/gi";

const OtherProducts = () => {
  return (
    <div className="mt-20">
        <h1 className="sm:text-xl pr-3 flex items-center sm:pr-40  font-semibold">محصولات خارجی<span className="bg-[#ed242e] mr-1 text-white rounded-full px-4 py-1 flex items-center gap-x-2">Gorill<GiGorilla /></span></h1>
        <div className="mx-auto w-[85%] mt-16">
            <OtherProductsSlider/>
        </div>
    </div>
  )
}

export default OtherProducts
