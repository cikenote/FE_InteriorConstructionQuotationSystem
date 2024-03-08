import axiosClient from "../axiosClient";
import { END_POINT_API } from "../endpoint";

const QuotationAPI = {
  AddNewQuotation: (params) =>
    axiosClient.post(END_POINT_API.QUOTATION, params),
  GetQuotationsList: () => axiosClient.get(END_POINT_API.QUOTATION),
};

export default QuotationAPI;
