import { PiArrowUpRightFill } from "react-icons/pi";

import tinyDeliveryman from "../../assets/images/tiny-deliveryman.png";
import { Link } from "react-router";

const BannerCard = ({ img, title, subtitle }) => {
  return (
    <div className="relative h-full my-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-base-100 p-12 rounded-2xl">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 z-10">
        <div className="aspect-video w-1/3 lg:w-1/2 h-auto">
          <img src={tinyDeliveryman} className="h-full w-full object-contain" />
        </div>
        <h1 className="text-5xl text-base-content font-bold">{title}</h1>
        <p className="text-lg">{subtitle}</p>

        <div className="w-fit flex items-center gap-4">
          <div className="flex items-center gap-0.5">
            <button className="btn btn-accent rounded-full font-bold">
              Track Your Parcel
            </button>
            <Link to="/" className="bg-black text-accent p-2 rounded-full">
              <PiArrowUpRightFill />
            </Link>
          </div>
          <Link
            to="/be-a-rider"
            className="btn btn-outline border-2 border-base-200 rounded-lg"
          >
            Be A Rider
          </Link>
        </div>
      </div>

      <img
        src={img}
        className="absolute lg:static inset-0 opacity-10 lg:opacity-100"
      />
    </div>
  );
};

export default BannerCard;
