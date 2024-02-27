import { Form, Modal } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";

const QuotationDetailModal = ({}, ref) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => {
    return {
      openModal: () => setIsOpenModal(true),
    };
  });

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onFinishForm = (values) => {};

  return (
    <Modal
      title="Quotation Detail"
      onCancel={onCloseModal}
      closable
      width={800}
      open={isOpenModal}
    >
      QuotationDetailModal
    </Modal>
  );
};

export default forwardRef(QuotationDetailModal);
