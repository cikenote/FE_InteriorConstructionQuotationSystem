import { useRef, useState } from "react";
import QuotationModal from "../../../components/QuotationForm/QuotationModal";
import QuotationDeleteModal from "../../../components/QuotationForm/QuotationDeleteModal";
import { QUOTATION_COLUMNS, QUOTATION_DATA_SOURCE } from "./constant";
import TableLayout from "../../../layouts/TableLayout";
import QuotationDetailModal from "./QuotationDetailModal";
import QuotationAPI from "../../../api/quotation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { message } from "antd";

const StaffQuotation = () => {
  const quotationModal = useRef();
  const quotationDetailModal = useRef();
  const quotationDelete = useRef();
  const quotationEdit = useRef();
  const quotationRef = useRef();
  const [messageApi, contextHolder] = message.useMessage();
  const [quotations, setQuotations] = useState();

  // const { data: quotationsList, refetch: getQuotationList } = useQuery({
  //   queryKey: ["quotation"],
  //   queryFn: () => QuotationAPI.GetQuotationsList(),
  //   onSuccess: (response) => {
  //     setQuotations(response);
  //   },
  //   onError: () => {
  //     messageApi.open({
  //       type: "error",
  //       content: "Error occur when get quotation list",
  //     });
  //   },
  // });

  const { data: quotationsList } = useQuery({
    queryKey: ["all-quotation"],
    queryFn: () => QuotationAPI.GetAllQuotation(),
    onSuccess: (response) => {
      setQuotations(response);
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Error occur when get quotation list",
      });
    },
  });

  const searchStaffQuotation = (event) => {};
  // console.log(quotationsList.$values);
  const quotation = () => {
    return quotationsList?.$values;
  };
  const onDetailQuotation = (id) => {
    quotationDetailModal.current.openModal(id);
  };
  const onEditQuotation = (id) => {
    quotationRef.current.openModal(id);
  };
  const onDeleteQuotation = (id) => {
    quotationDelete.current.openModal(id);
  };

  console.log(quotation());
  return (
    <>
      <QuotationModal ref={quotationModal} />
      <QuotationDetailModal ref={quotationDetailModal} />
      <QuotationDeleteModal
        ref={quotationDelete}
        AfterCloseModal={() => getQuotationList()}
      />
      <QuotationModal
        ref={quotationRef}
        AfterCloseModal={() => getQuotationList()}
      />
      {contextHolder}
      <TableLayout
        tableColumns={QUOTATION_COLUMNS}
        tableDataSource={quotation}
        actionName={"Confirm Quotation"}
        onchangeSearch={searchStaffQuotation}
        addNewAction={() => quotationModal.current.openModal()}
        onEditQuotation={onEditQuotation}
        viewProductDetail={onDetailQuotation}
        onDeleteQuotation={onDeleteQuotation}
      />
    </>
  );
};

export default StaffQuotation;
