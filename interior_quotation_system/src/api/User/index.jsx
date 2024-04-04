import axiosClient from "../axiosClient";
import { END_POINT_API } from "../endpoint";

const AccountManagerAPI = {
  getUsersList: (page, pageSize, searchTerm) => {
    return axiosClient.get(
      `${END_POINT_API.ACCOUNT_MANAGER}?page=${page}&pageSize=${pageSize}&searchTerm=${searchTerm}`
    );
  },
  createUser: (userData) => {
    return axiosClient.post(END_POINT_API.ACCOUNT_MANAGER, userData);
  },
  getUserById: (userId) => {
    return axiosClient.get(`${END_POINT_API.ACCOUNT_MANAGER}/${userId}`);
  },
  updateUser: (userId, userData) => {
    return axiosClient.put(
      `${END_POINT_API.ACCOUNT_MANAGER}/${userId}`,
      userData
    );
  },
  deleteUser: (userId) => {
    return axiosClient.delete(`${END_POINT_API.ACCOUNT_MANAGER}/${userId}`);
  },
};

export default AccountManagerAPI;
