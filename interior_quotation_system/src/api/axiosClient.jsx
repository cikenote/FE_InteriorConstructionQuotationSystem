import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "https://swp391api.developvn.click",
  timeout: 3000,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    console.log(response);
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
