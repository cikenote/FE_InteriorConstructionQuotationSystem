import axiosClient from "../axiosClient";
import { END_POINT_API } from "../endpoint";

const AuthenticateAPI = {
  LoginAccount: (params) => axiosClient.post(END_POINT_API.LOGIN, params),
  RegisterAccount: (params) => axiosClient.post(END_POINT_API.REGISTER, params),
  GetUserInformation: () => axiosClient.get(END_POINT_API.USER_INFO),
  GetUserProfile: () => axiosClient.get("/api/User/info"),
  VerifyToken: (params) => axiosClient.post("/api/User/verify", params),
};

export default AuthenticateAPI;
