import axiosClient from "../axiosClient";
import { END_POINT_API } from "../endpoint";

const DashboardAPI = {
  getProductCount: async () => {
    try {
      const response = await axiosClient.get(
        END_POINT_API.DASHBOARD_PRODUCT_COUNT
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching product count:", error);
      throw error;
    }
  },

  getUserCount: async () => {
    try {
      const response = await axiosClient.get(
        END_POINT_API.DASHBOARD_USER_COUNT
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user count:", error);
      throw error;
    }
  },

  getCategoryCount: async () => {
    try {
      const response = await axiosClient.get(
        END_POINT_API.DASHBOARD_CATEGORY_COUNT
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching category count:", error);
      throw error;
    }
  },

  getContractCount: async () => {
    try {
      const response = await axiosClient.get(
        END_POINT_API.DASHBOARD_CONTRACT_COUNT
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching contract count:", error);
      throw error;
    }
  },
};

export default DashboardAPI;
