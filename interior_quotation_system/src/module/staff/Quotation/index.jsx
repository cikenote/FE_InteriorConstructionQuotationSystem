import { useRef, useState } from "react";
import QuotationModal from "../../../components/QuotationForm/QuotationModal";
import QuotationDeleteModal from "../../../components/QuotationForm/QuotationDeleteModal";
import { QUOTATION_COLUMNS } from "./constant";
import TableLayout from "../../../layouts/TableLayout";
import QuotationDetailModal from "./QuotationDetailModal";
import QuotationAPI from "../../../api/quotation";
import { useQuery, useMutation } from "@tanstack/react-query";
import { message, Spin } from "antd";

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

  const { isPending: isLoadingSendContract, mutate: mutateSendContract } =
    useMutation({
      mutationFn: QuotationAPI.SendContract,
      mutationKey: "quotation-api",
      onError: (errorResponse) => {
        message.error(errorResponse.response.data.message);
      },
      onSuccess: () => {
        message.success("Send contract to customer is successful");
      },
    });

  const searchStaffQuotation = (event) => {};
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

  const onSendContract = (id) => {
    mutateSendContract(id);
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
      <Spin spinning={isLoadingSendContract}>
        <TableLayout
          tableColumns={QUOTATION_COLUMNS}
          tableDataSource={quotation}
          actionName={"Confirm Quotation"}
          onchangeSearch={searchStaffQuotation}
          addNewAction={() => quotationModal.current.openModal()}
          onEditQuotation={onEditQuotation}
          viewProductDetail={onDetailQuotation}
          onDeleteQuotation={onDeleteQuotation}
          sendContract={onSendContract}
        />
      </Spin>
    </>
  );
};

export default StaffQuotation;
