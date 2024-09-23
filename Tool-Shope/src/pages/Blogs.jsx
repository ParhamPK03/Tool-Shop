import { Link } from "react-router-dom"
import FooterSection from "../Components/FooterSection"
const Blogs = () => {
  return (
    <>
    <div>
    <h1 className="text-2xl text-red-500  my-10 pr-32">مطالعه مطالب رونیکس :</h1>
    <div className="flex items-center justify-center flex-wrap gap-5 mt-20">
      <Link to="/oldvsNew">
      <div className="flex flex-col gap-3 text-sm">
        <img src="/img/LastWords/371749_2.pngwsw.png" className="w-[300px] h-[170px] cursor-pointer hover:opacity-85 rounded-lg" alt="" />
        <span className="font-semibold">تفاوت ابزار های قدیم و جدید</span>
        
      </div>
      </Link>
      <Link to="/ronixBadThings">
      <div className="flex flex-col gap-3 text-sm">
        <img src="/img/LastWords/nailewr-stapler-cover-.webp" className="w-[300px] h-[170px] cursor-pointer hover:opacity-85 rounded-lg" alt="" />
        <span className="font-semibold">معایب میخکوب های برقی شارژی و انواع آن</span>
        
      </div>
      </Link>
      <Link to="/difftentsDrill">
      <div className="flex flex-col gap-3 text-sm">
        <img src="/img/LastWords/638180908947346933.webp" className="w-[300px] h-[170px] cursor-pointer hover:opacity-85 rounded-lg" alt="" />
        <span className="font-semibold">تفاوت دریل شارژی و دریل معمولی چیست؟</span>
        
      </div>
      </Link>
      <Link to="/recycleTools">
      <div className="flex flex-col gap-3 text-sm">
        <img src="/img/LastWords/blog-new-5-min.jpg" className="w-[300px] h-[170px] cursor-pointer hover:opacity-85 rounded-lg" alt="" />
        <span className="font-semibold">راهکار های افزایش طول عمر ابزار آلات برقی</span>
        
      </div>
      </Link>
    </div>
</div>
<FooterSection/>
</>
  )
}

export default Blogs
