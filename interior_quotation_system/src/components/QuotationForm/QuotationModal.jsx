import PropTypes from "prop-types"; // Import PropTypes

import { useMutation } from "@tanstack/react-query";
import {
  Button,
  Col,
  Flex,
  Form,
  Input,
  Modal,
  Row,
  Select,
  message,
} from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";
import QuotationAPI from "../../api/quotation";
import { FORM_RULES } from "../../utils/constant";

const QuotationModal = ({ AfterCloseModal, QuotationId }, ref) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isOpenModal, setIsOpenModal] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => {
        setIsOpenModal(true);
      },
    };
  });

  const { mutate, isPending: updateQuotationLoading } = useMutation({
    mutationFn: QuotationAPI.UpdateQuotationStatus,
    mutationKey: "update-quotation",
    onError: () => {
      message.error("Update quotation is error");
    },
    onSuccess: () => {
      messageApi.open({
        type: "success",
        content: "Update quotation is successfully",
      });
      onCloseModal();
      AfterCloseModal();
    },
  });

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onSubmitForm = (response) => {
    mutate({
      quotationId: QuotationId,
      quotationStatus: response.quotationStatus,
      message: response.message,
    });
  };

  return (
    <Modal
      visible={isOpenModal}
      onCancel={onCloseModal}
      title="Update Quotation"
      closeIcon={false}
      footer={null}
    >
      {contextHolder}
      <Form layout="vertical" onFinish={onSubmitForm}>
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <Form.Item
              label="Status"
              name="quotationStatus"
              rules={[FORM_RULES.required]}
            >
              <Select
                options={[
                  { label: "Pending", value: "Pending" },
                  { label: "Done", value: "Done" },
                  { label: "Cancel", value: "Cancel" },
                ]}
              ></Select>
            </Form.Item>

            <Form.Item
              label="Description"
              name="message"
              rules={[FORM_RULES.required]}
            >
              <Input.TextArea rows={3} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Flex justify="end" gap={4}>
              <Button onClick={onCloseModal}>Cancel</Button>
              <Button
                type="primary"
                htmlType="submit"
                loading={updateQuotationLoading}
              >
                Update
              </Button>
            </Flex>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

// Add propTypes validation
QuotationModal.propTypes = {
  AfterCloseModal: PropTypes.func.isRequired,
  QuotationId: PropTypes.number.isRequired,
};

export default forwardRef(QuotationModal);
