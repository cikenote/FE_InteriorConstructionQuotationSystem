import { Col, Form, Grid, Modal } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";

const ProductDetailModal = ({}, ref) => {
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
      title="Product Detail"
      onCancel={onCloseModal}
      closable
      width={800}
      open={isOpenModal}
    >
      <Grid gutter={[10, 10]}>
        <Col span={12}></Col>
        <Col span={12}></Col>
      </Grid>
    </Modal>
  );
};

export default forwardRef(ProductDetailModal);
