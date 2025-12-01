import { useQuery } from "@tanstack/react-query";
import { HiOutlineEye, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

import alert from "../../lib/utils/alert";
import useAxiosSecured from "../../hooks/useAxiosSecured";
import useAuth from "../../hooks/useAuth";
import Loader from "../../ui/shared/Loader";

const MyParcelsPage = () => {
  const { user } = useAuth();
  const axios = useAxiosSecured();
  const {
    data: parcels,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["parcels", user.email],
    queryFn: () =>
      axios.get(`/parcels?senderEmail=${user.email}`).then((res) => res.data),
  });

  const handleDelete = async (id) => {
    await alert.confirm(
      "Confirm Deletion",
      "This action cannot be undone.",
      async () => {
        try {
          const data = await axios
            .delete(`parcels/${id}`)
            .then((res) => res.data);
          if (data.acknowledged) {
            alert.success(
              "Deletion Successful",
              "Your parcel has been deleted."
            );
            await refetch();
          } else {
            alert.error(
              "Oops!",
              "Could not delete the parcel. Please try again."
            );
          }
        } catch (error) {
          alert.error(
            "Oops!",
            error.message || "Something went wrong. Please try again."
          );
        }
      }
    );
  };

  const handlePayment = async (parcel) => {
    await alert.confirm(
      "Confirm Payment",
      "This action cannot be undone.",
      async () => {
        try {
          const payment = await axios
            .post("/payments", parcel)
            .then((res) => res.data)
            .catch((e) => console.log(e));
          if (payment) {
            window.location.assign(payment.url);
          } else {
            alert.error("Oops!", "Payment is not working. Please try again.");
          }
        } catch (error) {
          alert.error(
            "Oops!",
            error.message || "Something went wrong. Please try again."
          );
        }
      }
    );
  };

  if (isError) throw new Error(`Failed to load Parcels`);

  if (isLoading) return <Loader />;

  return (
    <div className="p-8 bg-base-100 rounded-xl space-y-6">
      <h1 className="text-2xl font-bold">My Parcels</h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Index</th>
              <th>Parcel Name</th>
              <th>Parcel Type</th>
              <th>Total Charge</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.parcelType}</td>
                <td>{parcel.charge}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <div className="badge badge-sm badge-success font-bold">
                      Paid
                    </div>
                  ) : (
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handlePayment(parcel)}
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td className="join">
                  <button className="join-item btn btn-square">
                    <HiOutlineEye className="text-xl" />
                  </button>

                  <button className="join-item btn btn-square">
                    <HiOutlinePencil className="text-xl" />
                  </button>

                  <button
                    className="join-item btn btn-square"
                    onClick={() => handleDelete(parcel._id)}
                  >
                    <HiOutlineTrash className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyParcelsPage;
