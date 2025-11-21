import { Navigate, useLocation } from "react-router";

import useAuth from "../hooks/useAuth";
import Loader from "../ui/shared/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (!user)
    return <Navigate to="/login" state={{ redirect: pathname }} replace />;

  return children;
};

export default PrivateRoute;
