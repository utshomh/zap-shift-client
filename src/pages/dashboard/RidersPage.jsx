import { useQuery } from "@tanstack/react-query";
import { HiOutlineEye, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

import useAxiosSecured from "../../hooks/useAxiosSecured";
import Loader from "../../ui/shared/Loader";
import alert from "../../lib/utils/alert";

const RidersPage = () => {
  const axios = useAxiosSecured();
  const {
    data: riders,
    isLoading,
    isError,
    refetch,
    error,
  } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: () => axios.get("/riders").then((res) => res.data),
  });

  const handleApproval = async (rider) => {
    const { _id: id, name } = rider;

    try {
      await axios
        .patch(`riders/${id}`, { status: "approved" })
        .then((res) => res.data);
      alert.success("Approved", `Successfully approved ${name} as a rider.`);
      await refetch();
    } catch (error) {
      alert.error(
        "Oops!",
        error.message || "Something went wrong. Please try again."
      );
    }
  };

  const handleDeletion = async (rider) => {
    const { _id: id, name } = rider;

    await alert.confirm(
      "Confirm Deletion",
      "This action cannot be undone.",
      async () => {
        try {
          const data = await axios
            .delete(`riders/${id}`)
            .then((res) => res.data);
          if (data.acknowledged) {
            alert.success(
              "Deletion Successful",
              `Successfully deleted ${name} from rider list.`
            );
            await refetch();
          } else {
            alert.error(
              "Oops!",
              "Could not delete the rider. Please try again."
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

  if (isError) throw new Error(error.message);

  if (isLoading) return <Loader />;

  return (
    <div className="p-8 bg-base-100 rounded-xl space-y-6">
      <h1 className="text-2xl font-bold">Riders</h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Warehouse</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr key={rider._id}>
                <td className="font-bold">{index + 1}</td>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.warehouse}</td>
                <td>
                  {rider.status === "pending" ? (
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleApproval(rider)}
                    >
                      Approve
                    </button>
                  ) : (
                    <div className="badge badge-sm badge-success font-bold">
                      Active
                    </div>
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
                    onClick={() => handleDeletion(rider)}
                  >
                    <HiOutlineTrash className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RidersPage;
