import { Link } from "react-router-dom"

const Main2Images = () => {
  return (
    <div className="my-20 flex flex-wrap justify-center gap-5">
      <Link to="/discount">
      <img src="/img/Main2Images/wbp1.webp" className="sm:w-[620px] xs:w-[400px] w-[350px] h-[210px] rounded-2xl cursor-pointer hover:opacity-70" alt=""onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      </Link>
      <Link to="/discount">
      <img src="/img/Main2Images/wbp2.webp" className="sm:w-[620px] xs:w-[400px] w-[350px] h-[210px] rounded-2xl cursor-pointer hover:opacity-70" alt=""onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      </Link>
    </div>
  )
}

export default Main2Images
