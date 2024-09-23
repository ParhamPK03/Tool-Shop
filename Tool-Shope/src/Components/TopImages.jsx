const TopImages = () => {
    return (
      <div className="flex flex-col gap-y-5">
        <div className="relative cursor-pointer" onClick={() => {
    const target = document.getElementById("drill");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }}>
          <img src="/img/TopSlider/aaa.jpg" className="sm:w-[460px] w-[350px] h-[200px] rounded-2xl " alt="" />
          <div className="absolute top-4 right-3 left-0 p-3  text-white rounded-t-2xl">
            <p className="text-lg font-bold">دریل قدرتمند رونیکس شارژی</p>
            <p className="text-[12px] text-gray-300 w-[200px] sm:w-[300px] mt-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده است</p>
            <button className="text-[12px] w-[80px] mt-5 text-white bg-[#ed242e] hover:opacity-80 rounded-full cursor-pointer font-bold p-1">خرید محصول</button>
          </div>
        </div>
  
        <div className="relative cursor-pointer" onClick={() => {
    const target = document.getElementById("drill");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }}>
          <img src="/img/TopSlider/sss (1).jpg" className="sm:w-[460px] w-[350px] h-[200px] rounded-2xl " alt="" />
          <div className="absolute top-4 right-3 left-0 p-3  text-white rounded-t-2xl">
            <p className="text-lg font-bold ">دریل قدرتمند رونیکس شارژی</p>
            <p className="text-[12px] text-gray-300 w-[200px] sm:w-[300px] mt-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده است</p>
            <button className="text-[12px] w-[80px] mt-5 text-white bg-[#ed242e] hover:opacity-80 rounded-full cursor-pointer font-bold p-1">خرید محصول</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TopImages;
  