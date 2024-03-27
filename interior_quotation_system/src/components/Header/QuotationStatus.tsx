import { Modal, Skeleton, Table } from "antd";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { QUOTATIONS_COLUMNS } from "./constant";
import { useQuery } from "@tanstack/react-query";
import QuotationAPI from "../../api/quotation";

const QuotationStatus = ({}, ref: any) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [quotations, setQuotations] = useState([]);

  const { isLoading: isLoadingCurrentQuotation, data: currentQuotation } =
    useQuery({
      queryFn: QuotationAPI.GetCurrentQuotation,
      queryKey: ["current-quotation"],
    });

  useImperativeHandle(ref, () => {
    return {
      openModal: () => setIsOpenModal(true),
    };
  });

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  if (isLoadingCurrentQuotation) {
    return <Skeleton />;
  }

  useEffect(() => {
    if (currentQuotation) {
      const data = currentQuotation as any;
      const quotationPending = data.$values.filter(
        (item) => item.quotationStatus === "Pending"
      );
      setQuotations(quotationPending);
    }
  }, [currentQuotation]);

  return (
    <Modal
      title="Quotations status"
      open={isOpenModal}
      onCancel={onCloseModal}
      footer={null}
      closeIcon
      width={700}
    >
      <Table columns={QUOTATIONS_COLUMNS} dataSource={quotations} />
    </Modal>
  );
};

export default forwardRef(QuotationStatus);
