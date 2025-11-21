import axios from "axios";

export const getAll = () => axios.get("/reviews.json").then((res) => res.data);
