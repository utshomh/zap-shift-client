import axios from "axios";

export const getAll = () =>
  axios.get("/warehouses.json").then((res) => res.data);
