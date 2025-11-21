import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import amazon from "../../assets/images/brands/amazon.png";
import amazonVector from "../../assets/images/brands/amazon_vector.png";
import casio from "../../assets/images/brands/casio.png";
import moonstar from "../../assets/images/brands/moonstar.png";
import randstad from "../../assets/images/brands/randstad.png";
import star from "../../assets/images/brands/star.png";
import starPeople from "../../assets/images/brands/start_people.png";

const brands = [
  amazon,
  casio,
  moonstar,
  star,
  randstad,
  starPeople,
  amazonVector,
];

const Brands = () => {
  return (
    <div className="w-full mx-auto py-10 space-y-6">
      <h2 className="text-3xl text-center font-bold text-base-content">
        We've helped thousands of sales teams
      </h2>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <img src={brand} className="w-32 h-auto object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
