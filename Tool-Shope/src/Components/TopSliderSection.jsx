import TopImages from "./TopImages"
import TopSlider from "./TopSlider"

const TopSliderSection = () => {
  return (
    <div className="bg-[#ed242e] h-[400px]">
      <div className="flex flex-wrap items-center justify-center m-auto gap-5 pt-10">
      <div className="lg:w-[60%] w-[80%] sm:flex hidden">
        <TopSlider/>
      </div>
      <div>
        <TopImages/>
      </div>
      </div>
    </div>
  )
}

export default TopSliderSection
