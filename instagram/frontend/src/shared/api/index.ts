import axios from "axios";
import { LOCAL_STORAGE_TOKEN } from "../consts/localstorage";

const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

export const $api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `${token || ""}`,
  },
});
