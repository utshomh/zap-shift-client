import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";

import useAuth from "../hooks/useAuth";
import alert from "../lib/utils/alert";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosSecured = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const reqInterceptor = (config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    };

    const resInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.status === 401 || error.status === 403) {
          // await logoutUser();
          alert.error(
            "Access Denied!",
            "Looks like you're not allowed in here. Please log in again."
          );
          // navigate("/login");
        }
        return Promise.reject(error);
      }
    );

    axiosInstance.interceptors.request.use(reqInterceptor);

    return () => {
      axiosInstance.interceptors.request.eject(reqInterceptor);
      axiosInstance.interceptors.response.eject(resInterceptor);
    };
  }, [user, logoutUser, navigate]);

  return axiosInstance;
};

export default useAxiosSecured;
