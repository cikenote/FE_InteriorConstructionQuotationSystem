import { useQuery } from "@tanstack/react-query";
import { Modal, Spin, Table } from "antd";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import QuotationAPI from "../../api/quotation";
import QuotationDetail from "./QuotationDetail";
import { QUOTATIONS_COLUMNS } from "./constant";

const QuotationStatus = ({}, ref) => {
  const quotationDetailRef = useRef();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [quotations, setQuotations] = useState([]);
  const [quotationDetail, setQuotationDetail] = useState();

  const { isLoading: isLoadingCurrentQuotation, data: currentQuotation } =
    useQuery({
      queryFn: QuotationAPI.GetCurrentQuotation,
      queryKey: ["current-quotation"],
    });

  useEffect(() => {
    if (currentQuotation) {
      const data = currentQuotation;
      setQuotations(data.$values);
    }
  }, [currentQuotation]);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => setIsOpenModal(true),
    };
  });

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onViewQuotationDetail = (data) => {
    setQuotationDetail(data);
    quotationDetailRef.current.openModal();
  };

  return (
    <Modal
      title="Quotations status"
      open={isOpenModal}
      onCancel={onCloseModal}
      footer={null}
      closeIcon
      width={1000}
    >
      <QuotationDetail
        ref={quotationDetailRef}
        quotationDetailProp={quotationDetail}
      />
      <Spin spinning={isLoadingCurrentQuotation}>
        <Table
          columns={QUOTATIONS_COLUMNS({
            viewQuotationDetail: onViewQuotationDetail,
          })}
          dataSource={quotations}
        />
      </Spin>
    </Modal>
  );
};

export default forwardRef(QuotationStatus);
