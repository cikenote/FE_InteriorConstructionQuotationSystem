import axiosClient from "../axiosClient";
import { END_POINT_API } from "../endpoint";

const CategoryAPI = {
  getcategorylist: () => axiosClient.get(END_POINT_API.CATEGORY),
};

export default CategoryAPI;
