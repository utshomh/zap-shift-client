import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FiCheck, FiCopy } from "react-icons/fi";

import useAxiosSecured from "../../hooks/useAxiosSecured";
import useAuth from "../../hooks/useAuth";
import Loader from "../../ui/shared/Loader";
import dayjs from "dayjs";

const PaymentHistoryPage = () => {
  const axios = useAxiosSecured();
  const { user } = useAuth();
  const [currentCopy, setCurrentCopy] = useState("");
  const {
    data: payments,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["payments", user],
    queryFn: () =>
      axios
        .get(`/payments?customerEmail=${user.email}`)
        .then((res) => res.data),
  });

  const handleCopy = async (text) => {
    await navigator.clipboard.writeText(text);
    setCurrentCopy(text);
    setTimeout(() => setCurrentCopy(""), 1500);
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
              <th>Total Charge</th>
              <th>Transaction ID</th>
              <th>Paid At</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.parcelName}</td>
                <td>{payment.amount}</td>
                <td className="flex items-center gap-2">
                  <p className="text-sm break-all">{payment.transactionId}</p>
                  <div className="tooltip" data-tip="Copy">
                    <button
                      onClick={() => handleCopy(payment.transactionId)}
                      className="btn btn-xs"
                    >
                      {currentCopy === payment.transactionId ? (
                        <FiCheck />
                      ) : (
                        <FiCopy />
                      )}
                    </button>
                  </div>
                </td>
                <td>
                  {dayjs(payment.paidAt).format("DD/MM/YYYY | h:mm:ss A")}
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

export default PaymentHistoryPage;
