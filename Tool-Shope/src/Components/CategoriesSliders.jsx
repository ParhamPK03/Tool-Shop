import { Swiper, SwiperSlide } from 'swiper/react';
import { CategoriesSlider } from "../assets/Infoes";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 
import { FreeMode, Autoplay } from 'swiper/modules';
import CategoriesSliderBox from './CategoriesSliderBox';
import { Link } from 'react-router-dom';
export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          762: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1077: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        {CategoriesSlider.slice(0, 8).map((item, index) => (
          <SwiperSlide key={index} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center justify-center">
              <Link to={`/product/${item.id}`}>
                <CategoriesSliderBox
                  img={item.img}
                  off={item.off}
                  price={item.price}
                  oldprice={item.oldprice}
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
