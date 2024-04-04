import { Modal } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";

const QuotationDetail = ({ quotationDetailProp }, ref) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => setIsOpenModal(true),
    };
  });

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  console.log(quotationDetailProp);

  return (
    <Modal
      title="Quotations Detail"
      open={isOpenModal}
      onCancel={onCloseModal}
      footer={null}
      closeIcon
      width={1000}
    >
      QuotationDetail
    </Modal>
  );
};

export default forwardRef(QuotationDetail);
