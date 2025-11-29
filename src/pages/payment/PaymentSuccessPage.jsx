import { useEffect } from "react";
import { useSearchParams } from "react-router";

import useAxiosSecured from "../../hooks/useAxiosSecured";

const PaymentSuccessPage = () => {
  const axios = useAxiosSecured();
  const [params] = useSearchParams();
  const sessionId = params.get("sessionId");

  useEffect(() => {
    axios
      .patch(`/verify-payment?sessionId=${sessionId}`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
      });
  }, [axios, sessionId]);

  return <div>PaymentSuccessPage</div>;
};

export default PaymentSuccessPage;
