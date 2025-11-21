import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bigDeliveryman from "../../assets/images/big-deliveryman.png";
import deliveryman from "../../assets/images/deliveryman.png";
import fastDeliveryman from "../../assets/images/fast-deliveryman.png";
import BannerCard from "./BannerCard";

const banners = [
  {
    img: bigDeliveryman,
    title: "We Make Sure Your Parcel Arrives On Time - No Fuss",
    subtitle:
      "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    img: deliveryman,
    title: "Fastest Delivery and Easy Pickup",
    subtitle:
      "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    img: fastDeliveryman,
    title: "Delivery in 30 Minutes at Your Doorstep",
    subtitle:
      "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.",
  },
];

const Banner = () => {
  return (
    <Carousel autoPlay interval={2500} infiniteLoop showThumbs={false}>
      {banners.map((banner, index) => (
        <BannerCard
          key={index}
          img={banner.img}
          title={banner.title}
          subtitle={banner.subtitle}
        />
      ))}
    </Carousel>
  );
};

export default Banner;
