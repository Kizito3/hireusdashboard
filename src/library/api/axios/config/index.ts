import axios from "axios";

const BASE_URL = "https://hireuslogistics-4a8d9b3a2621.herokuapp.com/api/v1";

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
