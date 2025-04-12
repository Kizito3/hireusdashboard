import axios from "axios";



const BASE_URL = "https://hireuslogistics1-0792135ae819.herokuapp.com/api/v1";

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
