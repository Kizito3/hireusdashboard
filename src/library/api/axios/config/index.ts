import axios from "axios";

const BASE_URL = "https://hireuslogistics-6a4b0c480992.herokuapp.com/api/v1";

export const axiosWithToken = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
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
