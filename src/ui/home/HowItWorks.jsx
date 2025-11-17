import deliveryVan from "../../assets/images/delivery-van.png";
import HowItWorksCard from "./HowItWorksCard";

const howItWorksData = [
  {
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    imageUrl: deliveryVan,
  },
  {
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    imageUrl: deliveryVan,
  },
  {
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    imageUrl: deliveryVan,
  },
  {
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    imageUrl: deliveryVan,
  },
];

const HowItWorks = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl text-accent-content font-bold mb-6">
        How it Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {howItWorksData.map((data, index) => (
          <HowItWorksCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
