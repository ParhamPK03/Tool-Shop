import  { useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { LiaStarSolid } from "react-icons/lia";
import { TfiPencilAlt } from "react-icons/tfi";
import { useParams } from 'react-router-dom';
import { GiBeachBag } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import CountdownTimer from "../Components/CountdownTimer";
import { FaTruck } from "react-icons/fa";
import { PiChatCircleTextLight } from "react-icons/pi";
import { MdOutlineDescription } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import FooterSection from "./FooterSection"
import { useEffect } from 'react';
import mediumZoom from "medium-zoom";
import { AllTools } from "../assets/Infoes";
import { useContext } from "react";
import Swal from 'sweetalert2';
import { UserContext } from "../Context/Context";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaHeart } from "react-icons/fa6";
import CategoriesSliders from "./CategoriesSliders"
import {Link} from "react-router-dom"

const StarRating = ({ rating, setRating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          onClick={() => setRating(index + 1)}
          className="focus:outline-none"
        >
          {index < rating ? (
            <LiaStarSolid className="text-yellow-500 text-2xl" />
          ) : (
            <IoIosStarOutline className="text-gray-400 text-2xl" />
          )}
        </button>
      ))}
    </div>
  );
};

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };
  const { addToLikes } = useContext(UserContext);

  const handleLikeClick = () => {
    addToLikes(product); 
    
  };

  const handleCartClick = () => {
    
    
  };

  const { user } = useContext(UserContext);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false); 
  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!user) {
      Swal.fire({
        icon: 'warning',
        title: 'خطا',
        text: 'لطفا وارد شوید تا بتوانید نظر خود را ثبت کنید.'
      });
      return;
    }

    
    if (!rating || !comment || !name || !email) {
      Swal.fire({
        icon: 'warning',
        title: 'خطا',
        text: 'لطفا تمام فیلدها را کامل کنید.'
      });
      return;
    }

    
    if (submitted) {
      Swal.fire({
        icon: 'info',
        title: 'اطلاع',
        text: 'شما قبلاً نظر خود را ثبت کرده‌اید.'
      });
      return;
    }

    
    Swal.fire({
      icon: 'success',
      title: 'موفق',
      text: 'نظر شما با موفقیت ثبت شد.'
    }).then(() => {
      setSubmitted(true);
      setRating(0);
      setComment('');
      setName('');
      setEmail('');
    });
  };
  const { addToCart } = useContext(UserContext);

  const handleAddToCart = () => {
    addToCart(product);
  };
 
  useEffect(() => {
  
    const zoom = mediumZoom(".zoomable", {
      margin: 20,
      background: "#BADA55", 
    });

    return () => zoom.detach(); 
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const targetDate = new Date().setDate(new Date().getDate() + 2);
  const { id } = useParams();
  const product = AllTools.find((prod) => prod.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('description'); 
  const [rating, setRating] = useState(0); 
  const [hoverText, setHoverText] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  if (!product) {
    return <div>محصول مورد نظر یافت نشد.</div>;
  }
  

  const handleMouseEnter = (event) => {
    setHoverText('برای بزرگ شدن تصویر کلیک کنید');
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setHoverText('');
  };

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <>
    <div className="p-4">
      <div className="bg-white rounded-2xl min-h-[450px] mt-10 flex flex-wrap gap-y-10  3md:justify-between xs:justify-center xs:gap-x-20 3md:gap-0 px-10 pt-5">
        <div style={{ position: 'relative' }}>
        <img
        src={product.img}
        alt={product.name}
        className="zoomable w-[300px] h-[300px] border border-gray-200 rounded-3xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      />
      <br />
      <span className="text-orange-400 text-sm">درصد فروش محصول :</span>
      <div className="progress-container my-5">
        
  <div className="progress-bar">
    
  <p className="text-white pr-2">70%</p>
  </div>
</div>

      {hoverText && (
        <div
          style={{
            position: 'fixed',
            top: position.y + 10,
            left: position.x + 10,
            backgroundColor: 'white',
            color: 'gray',
            padding: '2px',
            borderRadius: '3px',
            pointerEvents: 'none',
          }}
        >
          {hoverText}
        </div>
      )}
        </div>
        
        <div>
          <h1 className="text-2xl pr-3 text-gray-700">{product.name}</h1>
          <div className="bg-[#ed242e] text-white text-sm mt-3 w-[160px] h-[35px] px-1 rounded-2xl flex items-center justify-center gap-2">
            <VscWorkspaceTrusted className="text-white text-lg" />
            <p>تضمین اصالت کالا</p>
          </div>
          <div className="flex flex-wrap gap-5 mt-3">
            <div className="flex flex-col gap-3 items-start">
              <span className="flex gap-1 items-center justify-center w-[135px] h-[40px] rounded-2xl shadow-lg text-gray-500">
                <GiBeachBag className="text-orange-400" /> فروش موفق
              </span>
              <div className="flex gap-0.5 items-center pt-3 pr-2">
                <LiaStarSolid className="text-yellow-400 text-lg" />
                <LiaStarSolid className="text-yellow-400 text-lg" />
                <LiaStarSolid className="text-yellow-400 text-lg" />
                <IoIosStarOutline className="text-gray-300 text-lg" />
                <IoIosStarOutline className="text-gray-300 text-lg" />
              </div>
            </div>
            <div className="w-[250px] h-[40px] flex items-center justify-center rounded-2xl shadow-lg">
              <span className="text-sm text-gray-500">
                کد شناسایی محصول : <span className="text-orange-300">150010186#</span>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 items-center">
            <div className="mt-5 flex flex-col">
             

              <div className='text-xl mt-1'>{product.price} تومان</div>
            </div>
            <div className="pt-8" onClick={handleCartClick}>
              <button onClick={handleAddToCart} className="bg-[#ed242e] w-[200px] h-[40px] text-white rounded-md">افزودن به سبد خرید</button>
            </div>
            <div className="pt-8">
      <FaHeart
        className="bg-[#ed242e] h-[40px] w-[40px] text-xl text-white p-1 rounded-md cursor-pointer -mr-5"
        onClick={handleLikeClick}
      />
      <ToastContainer />
    </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="border-[7px] border-[#ed242e] rounded-2xl p-2 h-[150px] w-[300px] flex flex-col gap-4 items-center justify-center">
            <span className="text-gray-700">زمان باقی مانده تا پایان تخفیف</span>
            <CountdownTimer targetDate={targetDate} />
          </div>
          <div className="flex flex-col h-[100px] w-[300px] bg-slate-100 items-start pr-5 gap-2 justify-center rounded-2xl text-gray-500">
            <span>برخی از ویژگی ها</span>
            <div className="flex items-center gap-3">
              <span>رم 16</span>
              <span>حافظه 516</span>
              <div className="flex items-center gap-2">
      <span>رنگ‌بندی:</span>
      <span
        onClick={() => handleSelectColor('red')}
        className={`bg-orange-400 w-4 h-4 rounded-full cursor-pointer ${
          selectedColor === 'red' ? 'ring-2 ring-black' : ''
        }`}
      ></span>
      <span
        onClick={() => handleSelectColor('blue')}
        className={`bg-[#ed242e] w-4 h-4 rounded-full cursor-pointer ${
          selectedColor === 'blue' ? 'ring-2 ring-black' : ''
        }`}
      ></span>
    </div>
            </div>
          </div>
          <div className="h-[50px] w-[300px] rounded-2xl bg-orange-100">
            <div className="flex items-center gap-2 pt-3 pr-3">
              <VscWorkspaceTrusted className="text-orange-400 text-lg" />
              <span className="text-orange-400 text-sm">ضمانت 180 روزه کالا</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-lg text-gray-700 mt-2 pl-20">
            <div className="bg-[#ed242e] w-12 h-12 rounded-full flex items-center justify-center">
              <FaTruck className="text-white text-3xl" />
            </div>
            <div className="flex flex-col pb-10">
              <span>ارسال تا 7 روز آینده</span>
              <span className="text-gray-400 text-sm">تضمین شده</span>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[170px] w-[100%] mt-8 bg-white rounded-2xl m-auto pt-12">
        <div className="flex flex-wrap items-center gap-40 justify-center">
          <div className="flex flex-col items-center gap-2">
            <img src="/img/productdetails/24-hours-pnntw9milw8mlqgx919fa7kn5688iyntkt780vwl84.png" className="w-[50px] h-[50px]" alt="" />
            <span>پشتیبان 24 ساعت</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="/img/productdetails/checked-pnnu7aaepzbmp6gqwspzifh5trx4r8ejrci4jnkgac.png" className="w-[50px] h-[50px]" alt="" />
            <span>تضمین اصالت کالا</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="/img/productdetails/free-delivery-pnnu4szqopxe282ge84ffk0de659fzk1r2izyd8upg (1).png" className="w-[50px] h-[50px]" alt="" />
            <span>دسترسی سریع</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="/img/productdetails/search-pnnueewcjr2wqq40adn4x4pzzysc4lp9qmlok6zz3o.png" alt="" className="w-[50px] h-[50px]" />
            <span>تضمین کیفیت کالا</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="/img/productdetails/secure-payment-pnnuf9x0ta9dduuy991tpew7lojg6m4euw4pebpzec.png" className="w-[50px] h-[50px]" alt="" />
            <span>پرداخت سیستم شاپرک</span>
          </div>
        </div>
      </div>

      <div className="w-[100%] min-h-[400px] mt-8 bg-white rounded-2xl m-auto flex flex-col items-center py-10">
      <div className="flex items-center gap-3">
  <div
    className={`cursor-pointer w-[120px] h-[100px] rounded-xl flex flex-col items-center justify-center tab-button ${activeTab === 'description' ? 'bg-[#ed242e] text-white' : 'bg-white text-gray-800 shadow-lg'}`}
    onClick={() => setActiveTab('description')}
  >
    <MdOutlineDescription className="text-4xl" />
    <span>توضیحات</span>
  </div>
  <div
    className={`cursor-pointer w-[120px] h-[100px] rounded-xl flex flex-col items-center justify-center tab-button ${activeTab === 'reviews' ? 'bg-[#ed242e] text-white' : 'bg-white text-gray-800 shadow-lg'}`}
    onClick={() => setActiveTab('reviews')}
  >
    <PiChatCircleTextLight className="text-4xl" />
    <span>نظر کاربران</span>
  </div>
</div>


        
        {activeTab === 'description' && (
          <div className="mt-4 text-gray-700">
            <h1 className="text-[#ed242e] pr-10 text-2xl">توضیحات :</h1>
            <p className="px-10 text-md text-gray-600 leading-[30px] mt-8">آیفون صفحه‌کلید ندارد و تنها از یک کلید home برخوردار است که با فشردن آن کاربر به صفحه اصلی یا خانه منتقل می‌شود. بعد از معرفی آیفون ۷ این کلید لمسی شد و پس از معرفی آیفون ایکس به کلی از آیفون حذف شد و تنها دو گوشی آیفون اس‌ای ۲ و آیفون اس‌ای ۳ بودند که با این که بعد از آیفون ایکس معرفی و عرضه شدند، اما همچنان از کلید home بهره می‌بردند. آیفون از صفحه حساس لمسی بهره می‌گیرد، که می‌توان با آن تایپ کرد، شماره گرفت و برنامه‌های گوناگون مبتنی بر وب و سیستم‌عامل آی‌اواس، را اجرا کرد. نخستین بار شرکت اپل در تاریخ ۲۹ ژوئن سال ۲۰۰۷ میلادی آیفون را روانه بازارهای آمریکا کرد. در این روز بسیاری از علاقه‌مندان با تشکیل صف‌های طولانی در برابر محصولات خارجی‌های اپل و شرکت ای‌تی اند تی در صف ایستادند تا جزو اولین کسانی باشند که این گوشی را می‌خرند. همچنین این گوشی از سال ۲۰۰۸، در بازارهای جهانی نیز عرضه شد. هدف‌گذاری اپل، فروش ۱۰ میلیون واحد از این دستگاه بود.</p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="mt-4 text-gray-700">
            <div className="flex flex-wrap justify-center 3lg:gap-x-20 gap-y-7 pt-10">
            <div className="flex flex-col gap-5 items-start px-7">
      <div className="flex items-center gap-1">
        <TfiPencilAlt className="text-[#ed242e] text-xl" />
        <h1 className="text-md">دیدگاه خود را بنویسید</h1>
      </div>
      <span className="text-gray-600">لطفا هر فیلد را کامل پر کنید و اطلاعات خود را به درستی وارد نمایید *</span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-start rounded-md px-2 py-2">
        <span className="text-md text-gray-600">امتیاز دهی *</span>
        <StarRating rating={rating} setRating={setRating} />

        <div className="flex flex-col items-start gap-1">
          <span>دیدگاه شما *</span>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="sm:w-[600px] xs:w-[350px] bg-white flex border border-gray-300 rounded-md pr-2"
            rows="4"
          />
        </div>
        <div className="flex items-center gap-16">
          <div className="flex flex-col items-start gap-1">
            <span>نام *</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="sm:w-[270px] xs:w-[150px] h-[50px] bg-white flex border border-gray-300 rounded-md pr-2"
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <span>ایمیل *</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="sm:w-[270px] xs:w-[150px] h-[50px] bg-white flex border border-gray-300 rounded-md pr-2"
            />
          </div>
        </div>
        <div>
          <button type="submit" className="bg-[#ed242e] text-white rounded-md w-[66px] h-[45px]">
            ثبت
          </button>
        </div>
      </form>
    </div>
              
              <div className="bg-slate-100 rounded-xl flex flex-col items-start pt-4 px-3">
                <h1 className="text-gray-700 text-md">نظرات ثبت شده کاربران :</h1>
                <div className="bg-white shadow-md rounded-xl xs:w-[350px] sm:w-[600px] h-[160px] mt-3">
                <div className="  flex items-center mt-3 justify-between px-9">
                  <div className="flex gap-5 items-center"> 
                <FaCircleUser className="text-[50px] text-gray-300" />
                <div>
                  <span>علی خداپرست</span>
                </div>
                </div>
                <div className="flex  gap-0.5 text-yellow-300 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                </div>
                <div className="flex items-center justify-start border-t border-gray-300 px-5 w-[80%] mx-auto mt-2">
                    <span className="mt-7">یکی از بهترین  ها بود از خریدم خیلی راضیم و پیشنهاد میکنم</span>
                </div>
                </div>
                <div className="bg-white shadow-md rounded-xl mb-5 xs:w-[350px] sm:w-[600px] min-h-[160px] mt-3">
                <div className="  flex items-center mt-3 justify-between px-9">
                  <div className="flex gap-5 items-center"> 
                <FaCircleUser className="text-[50px] text-gray-300" />
                <div>
                  <span>امیر اقایی</span>
                </div>
                </div>
                <div className="flex  gap-0.5 text-yellow-300 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                </div>
                <div className="flex items-center justify-start border-t border-gray-300 px-5 w-[80%] mx-auto mt-2">
                    <span className="mt-7">خوب بود من توی تخفیف خریدم فروشنده کالا رو خیلی خوب بسته بندی کرده بود</span>
                </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
      <div className="bg-[#ed242e] h-[280px] rounded-2xl w-[90%] mx-auto md:mt-56 mt-32 flex 2xs:justify-between justify-center 2xs:pr-20">
            <div className="hidden flex-col items-center  mt-10 2xs:flex">
                <img src="/img/CategorySlider/9816286.png" className="w-[66px] h-[74px] " alt="" />
                <span className="text-white font-bold text-xl w-[100px]">تخفیف ها</span>
                <Link to="/discount" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><button className="bg-white rounded-full font-semibold text-sm ml-5 px-3 py-3 mt-3">مشاهده همه</button></Link>
            </div>
            <div className="-mt-[70px] w-[80%] mx-auto">
        <CategoriesSliders />
        </div>
    </div>
      </div>
    </div>
    <div >
    <FooterSection/>
  </div>
  </>
  );
};

export default ProductDetail;

