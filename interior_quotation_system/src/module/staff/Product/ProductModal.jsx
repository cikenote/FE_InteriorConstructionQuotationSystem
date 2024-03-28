import { Modal, Form, Row, Col, Input, DatePicker } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";
import { FORM_RULES } from "../../../utils/constant";

const ProductModal = ({ productUpdate }, ref) => {
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
      title={productUpdate ? "Update Product" : "New Product"}
      open={isOpenModal}
      onCancel={onCloseModal}
    >
      <Form form={form} onFinish={onFinishForm} layout="vertical">
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <Form.Item name="name" label="Name" rules={[FORM_RULES.required]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="price" label="Price" rules={[FORM_RULES.required]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="createAt"
              label="Create at"
              rules={[FORM_RULES.required]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="updateAt"
              label="Update at"
              rules={[FORM_RULES.required]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="description" label="Description" required={false}>
              <Input.TextArea rows={3} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="image" label="Image" required={false}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default forwardRef(ProductModal);
