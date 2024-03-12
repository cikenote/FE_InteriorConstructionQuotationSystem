import axiosClient from "../axiosClient";
import { END_POINT_API } from "../endpoint";

const QuotationAPI = {
  AddNewQuotation: (params) =>
    axiosClient.post(END_POINT_API.QUOTATION, params),
  GetQuotationsList: () => axiosClient.get(END_POINT_API.QUOTATION),
  UpdateQuotation: (params) => axiosClient.put(END_POINT_API.QUOTATION, params),
  DeleteQuotation: (userId, productId) => axiosClient.delete(`${END_POINT_API.QUOTATION}/${userId}/${productId}`),
};

export default QuotationAPI;
