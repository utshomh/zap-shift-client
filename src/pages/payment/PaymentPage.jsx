import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import useAxiosSecured from "../../hooks/useAxiosSecured";
import Loader from "../../ui/shared/Loader";

const PaymentPage = () => {
  const { id } = useParams();
  const axios = useAxiosSecured();
  const {
    data: parcel,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["parcel", id],
    queryFn: () => axios.get(`/parcels/${id}`).then((res) => res.data),
  });

  const handlePayment = async () => {
    const payment = await axios
      .post("/checkout", parcel)
      .then((res) => res.data);
    window.location.href = payment.url;
  };

  if (isError) throw new Error(`Failed to load Parcels`);

  if (isLoading) return <Loader />;

  return (
    <div className="p-8 bg-base-100 rounded-xl space-y-6">
      <h1 className="text-2xl font-bold">
        Paying <span className="text-primary font-bold">{parcel.charge}</span>{" "}
        for <span className="text-primary font-bold">{parcel.parcelName}</span>
      </h1>

      <button className="btn btn-lg btn-accent" onClick={() => handlePayment()}>
        Pay
      </button>
    </div>
  );
};

export default PaymentPage;
