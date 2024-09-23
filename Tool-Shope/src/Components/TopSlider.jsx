
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import '../App.css'; 
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          
          <img src="/img/TopSlider/slider2.webp" className='rounded-3xl h-[420px] ' alt="" onClick={() => {
    const target = document.getElementById("barghi");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }} />
        
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/discount">
          <img src="/img/TopSlider/slider1.webp" className='rounded-3xl h-[420px]' alt="" />
        </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
