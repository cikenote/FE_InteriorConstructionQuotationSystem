import axiosClient from "../axiosClient";
import { END_POINT_API } from "../endpoint";

const projectsAPI = {
    getListProjects: (page) => {
        return axiosClient.get(
            `${END_POINT_API.ARTICLES}?page=${page}&pageSize=10&sortByDateDescending=true`
        );
    },
}

export default projectsAPI;