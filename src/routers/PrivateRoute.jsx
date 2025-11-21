import { Navigate, useLocation } from "react-router";

import useAuth from "../hooks/useAuth";
import LoadingPage from "../pages/common/LoadingPage";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();

  if (loading) {
    return <LoadingPage />;
  }

  if (!user)
    return <Navigate to="/login" state={{ redirect: pathname }} replace />;

  return children;
};

export default PrivateRoute;
