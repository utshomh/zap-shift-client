import { useEffect } from "react";
import axios from "axios";

import useAuth from "../hooks/useAuth";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosSecured = () => {
  const { user } = useAuth();

  useEffect(() => {
    const interceptor = (config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    };

    axiosInstance.interceptors.request.use(interceptor);

    return () => {
      axiosInstance.interceptors.request.eject(interceptor);
    };
  }, [user]);

  return axiosInstance;
};

export default useAxiosSecured;
