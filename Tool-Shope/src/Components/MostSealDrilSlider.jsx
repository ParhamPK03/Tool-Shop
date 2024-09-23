import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { AllTools } from '../assets/Infoes';
import MostSealBox from "./MostSealBox"
import { Pagination } from 'swiper/modules';
import { FreeMode, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination,FreeMode, Autoplay]}
        className="mySwiper"
        breakpoints={{
            300: {
                slidesPerView: 1, 
                spaceBetween: 10,
              },
            555: {
                slidesPerView: 2, 
                spaceBetween: 10,
              },
            849: {
              slidesPerView: 3, 
              spaceBetween: 10,
            },
          
            1122: {
              slidesPerView: 4, 
              spaceBetween: 15,
            },
            
             1400: {
               slidesPerView: 5,
             spaceBetween: 20,
             },
          }}
      >
       {AllTools.slice(19,26).map((item, index) => (
          <SwiperSlide key={index}>
            <div className='flex items-center justify-center'>
            <Link to={`/product/${item.id}`}>
              <MostSealBox
                img={item.img}
                price={item.price}
                name={item.name}
              />
              </Link>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
}
