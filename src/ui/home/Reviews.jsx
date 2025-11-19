import { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import ReviewCard from "./ReviewCard";

const Reviews = ({ loader }) => {
  const reviews = use(loader);

  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold text-base-content/75">Reviews</h3>
        <p className="text-base-content/50">
          Read what our Customers got to say about us.
        </p>
      </div>

      <Swiper
        effect="coverflow"
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        pagination={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
