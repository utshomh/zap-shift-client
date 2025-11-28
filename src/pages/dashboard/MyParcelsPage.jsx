import { useQuery } from "@tanstack/react-query";
import useAxiosSecured from "../../hooks/useAxiosSecured";
import useAuth from "../../hooks/useAuth";
import ParcelCard from "../../ui/parcel/ParcelCard";

const MyParcelsPage = () => {
  const { user } = useAuth();
  const axios = useAxiosSecured();

  const {
    data: parcels,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["my-parcels", user.email],
    queryFn: () => axios.get("/parcels").then((res) => res.data),
  });

  if (isLoading) return <div className="p-4">Loading parcels...</div>;

  if (isError)
    return <div className="p-4 text-red-500">Failed to load parcels</div>;

  if (!parcels || parcels.length === 0)
    return <div className="p-4">No parcels found</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Parcels</h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {parcels.map((parcel) => (
          <ParcelCard key={parcel._id} parcel={parcel} />
        ))}
      </div>
    </div>
  );
};

export default MyParcelsPage;
