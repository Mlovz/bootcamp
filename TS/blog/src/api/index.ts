import axios from "axios";

const token = localStorage.getItem("token");

export const $api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `${token || ""}`,
  },
});
