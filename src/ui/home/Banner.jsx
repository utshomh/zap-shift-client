import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bigDeliveryman from "../../assets/images/big-deliveryman.png";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      interval={2500}
      infiniteLoop={true}
      showThumbs={false}
    >
      <BannerCard
        img={bigDeliveryman}
        title="We Make Sure Your Parcel Arrives On Time - No Fuss"
        subtitle="Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time."
      />
      <BannerCard
        img={bigDeliveryman}
        title="Fastest Delivery and Easy Pickup"
        subtitle="Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time."
      />
      <BannerCard
        img={bigDeliveryman}
        title="Delivery in 30 Minutes at Your Doorstep"
        subtitle="Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time."
      />
    </Carousel>
  );
};

export default Banner;
