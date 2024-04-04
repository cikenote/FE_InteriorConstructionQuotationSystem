import { useRef, useState } from "react";
import QuotationModal from "../../../components/QuotationForm/QuotationModal";
import QuotationDeleteModal from "../../../components/QuotationForm/QuotationDeleteModal";
import { QUOTATION_COLUMNS } from "./constant";
import TableLayout from "../../../layouts/TableLayout";
import QuotationDetailModal from "./QuotationDetailModal";
import QuotationAPI from "../../../api/quotation";
import { useQuery } from "@tanstack/react-query";
import { message } from "antd";

const StaffQuotation = () => {
  const quotationModal = useRef();
  const quotationDetailModal = useRef();
  const quotationDelete = useRef();
  const quotationEdit = useRef();
  const quotationRef = useRef();
  const [messageApi, contextHolder] = message.useMessage();
  const [quotations, setQuotations] = useState();
  const [quotationId, setQuotationId] = useState();

  const { data: quotationsList, refetch: getQuotationList } = useQuery({
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
  const onDetailQuotation = (quotation) => {
    setQuotationId(quotation);
    quotationDetailModal.current.openModal(quotation);
  };
  const onEditQuotation = (id) => {
    setQuotationId(id);
    quotationRef.current.openModal(id);
  };
  const onDeleteQuotation = (id) => {
    quotationDelete.current.openModal(id);
  };

  return (
    <>
      {/* <QuotationModal ref={quotationModal} /> */}
      <QuotationDetailModal
        ref={quotationDetailModal}
        quotationDetailProp={quotationId}
      />
      <QuotationDeleteModal
        ref={quotationDelete}
        AfterCloseModal={() => getQuotationList()}
      />
      <QuotationModal
        ref={quotationRef}
        AfterCloseModal={() => getQuotationList()}
        QuotationUpdate={quotationId}
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
