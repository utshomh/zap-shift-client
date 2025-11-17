const HowItWorksCard = ({ data }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl">
      <figure className="w-20 mx-auto">
        <img
          src={data.imageUrl}
          alt={data.title}
          className="w-full h-auto object-cover"
        />
      </figure>
      <div className="card-body text-start">
        <h3 className="card-title text-xl font-semibold">{data.title}</h3>
        <p className="text-inherit">{data.description}</p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
