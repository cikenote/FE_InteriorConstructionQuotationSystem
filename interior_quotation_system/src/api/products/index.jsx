import axiosClient from "../axiosClient";
import { END_POINT_API } from "../endpoint";

const ProductAPI = {
  getProductList: (page) => {
    return axiosClient.get(
      `${END_POINT_API.PRODUCTS}?page=${page}&pageSize=10&sortByDateDescending=true`
    );
  },
  getProductDetailById: (productId) =>
    axiosClient.get(`${END_POINT_API.PRODUCTS}/${productId}`),
  getListStyle: () => axiosClient.get(END_POINT_API.PRODUCTS_STYLE),
  getListHomeStyle: () => axiosClient.get(END_POINT_API.PRODUCTS_HOME_STYLE),
  getListConstructorStyle: (TypeId) =>
    axiosClient.get(
      `${END_POINT_API.PRODUCTS_CONSTRUCTOR_STYLE}?TypeID=${TypeId}`
    ),
};

export default ProductAPI;
