import { Modal, Form, Row, Col, Select } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";
import { FORM_RULES } from "../../../utils/constant";

const QuotationModal = ({ quoUpdate }, ref) => {
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

  const onFinishForm = (values) => {
    console.log(values);
  };

  console.log(quoUpdate);

  return (
    <Modal
      title={quoUpdate ? "Update Quotation" : "Confirm Quotation"}
      open={isOpenModal}
      onCancel={onCloseModal}
    >
      <Form form={form} onFinish={onFinishForm} layout="vertical">
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <Form.Item
              name="status"
              label="Status"
              rules={[FORM_RULES.required]}
            >
              <Select defaultValue={"Active"}>
                <Option value="Active">Active</Option>
                <Option value="Inactive">Inactive</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="details"
              label="Product"
              rules={[FORM_RULES.required]}
            >
              <Select defaultValue={"product-1"}>
                <Option value="product-1">Product 1</Option>
                <Option value="product-2">Product 2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default forwardRef(QuotationModal);
