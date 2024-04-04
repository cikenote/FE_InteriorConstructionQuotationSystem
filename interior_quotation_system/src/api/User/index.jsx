import axiosClient from "../axiosClient";
import { END_POINT_API } from "../endpoint";

const AccountManagerAPI = {
  getUsersList: (page, pageSize, searchTerm) => {
    return axiosClient.get(
      `${END_POINT_API.USER}?page=${page}&pageSize=${pageSize}&searchTerm=${searchTerm}`
    );
  },
  createUser: (userData) => {
    return axiosClient.post(END_POINT_API.USER, userData);
  },
  getUserById: (userId) => {
    return axiosClient.get(`${END_POINT_API.USER}/${userId}`);
  },
  updateUser: (userId, userData) => {
    return axiosClient.put(`${END_POINT_API.USER}/${userId}`, userData);
  },
  deleteUser: (userId) => {
    return axiosClient.delete(`${END_POINT_API.USER}/${userId}`);
  },
};

export default AccountManagerAPI;
