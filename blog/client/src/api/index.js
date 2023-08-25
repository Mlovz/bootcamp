// import axios from "axios";

// const token = localStorage.getItem("token");

// export const $api = axios.create({
//   baseURL: "http://localhost:8800/api",
//   withCredentials: true,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token || ""}`,
//   },
// });

// const BASE_URL = "http://localhost:5000/api";

// export const serviceApi = {
//   get: async (url, token) => {
//     const res = await axios.get(`${BASE_URL}/${url}`, {
//       headers: { Authorization: token },
//     });

//     return res;
//   },

//   post: async (url, body, token) => {
//     const res = await axios.post(`${BASE_URL}/${url}`, body, {
//       headers: { Authorization: token },
//     });

//     return res;
//   },

//   put: async (url, body, token) => {
//     const res = await axios.put(`${BASE_URL}/${url}`, body, {
//       headers: { Authorization: token },
//     });

//     return res;
//   },

//   patch: async (url, body, token) => {
//     const res = await axios.patch(`${BASE_URL}/${url}`, body, {
//       headers: { Authorization: token },
//     });

//     return res;
//   },

//   delete: async (url, token) => {
//     const res = await axios.delete(`${BASE_URL}/${url}`, {
//       headers: { Authorization: token },
//     });

//     return res;
//   },
// };
