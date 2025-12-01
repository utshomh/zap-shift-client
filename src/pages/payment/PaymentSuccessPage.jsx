import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { FiCopy, FiCheck } from "react-icons/fi";

import useAxiosSecured from "../../hooks/useAxiosSecured";
import Loader from "../../ui/shared/Loader";

const PaymentSuccessPage = () => {
  const axios = useAxiosSecured();
  const [params] = useSearchParams();
  const [currentCopy, setCurrentCopy] = useState("");
  const sessionId = params.get("sessionId");
  const {
    data: payment,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["payment", sessionId],
    queryFn: () =>
      axios.patch(`/payments?sessionId=${sessionId}`).then((res) => res.data),
  });

  const handleCopy = async (text) => {
    await navigator.clipboard.writeText(text);
    setCurrentCopy(text);
    setTimeout(() => setCurrentCopy(""), 1500);
  };

  if (isError) throw new Error(`Failed to load Payment`);

  if (isLoading) return <Loader />;

  return (
    <div className="p-8 bg-base-100 rounded-xl space-y-6">
      <h2 className="text-xl font-bold">Payment Successful</h2>

      {/* Tracking ID */}
      <div className="space-y-1">
        <p className="font-semibold">Tracking ID:</p>

        <div className="flex items-center gap-2">
          <p className="text-sm break-all">{payment.trackingId}</p>
          <div className="tooltip" data-tip="Copy">
            <button
              onClick={() => handleCopy(payment.trackingId)}
              className="btn btn-xs"
            >
              {currentCopy === payment.trackingId ? <FiCheck /> : <FiCopy />}
            </button>
          </div>
        </div>
      </div>

      {/* Transaction ID */}
      <div className="space-y-1">
        <p className="font-semibold">Transaction ID:</p>

        <div className="flex items-center gap-2">
          <p className="text-sm break-all">{payment.transactionId}</p>
          <div className="tooltip" data-tip="Copy">
            <button
              onClick={() => handleCopy(payment.transactionId)}
              className="btn btn-xs"
            >
              {currentCopy === payment.transactionId ? <FiCheck /> : <FiCopy />}
            </button>
          </div>
        </div>
      </div>

      <Link to="/dashboard/my-parcels" className="btn btn-accent">
        Go to My Parcels
      </Link>
    </div>
  );
};

export default PaymentSuccessPage;
