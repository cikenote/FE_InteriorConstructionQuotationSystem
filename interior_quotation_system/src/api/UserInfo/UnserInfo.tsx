import axiosClient from "../axiosClient";
import { END_POINT_API } from "../endpoint";

const UserInfo = {
    getUsersList: () => {
        return axiosClient.get(
            `${END_POINT_API.USER_INFO}`
        );
    },

};

export default UserInfo;
