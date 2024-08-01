import axios from "axios";

// const BASE_URL = "https://hireus-logistics-be0a8c34296c.herokuapp.com/api/v1";

// const BASE_URL =
//   import.meta.env.NODE_ENV === "production"
//     ? "https://hireuslogistics-6a4b0c480992.herokuapp.com/api/v1"
//     : "http://localhost:8000/api/v1";
const BASE_URL = "https://hireuslogistics-6a4b0c480992.herokuapp.com/api/v1";
const token = localStorage.getItem("token");

export const axiosWithToken = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axios.create({
  baseURL: BASE_URL,
});
