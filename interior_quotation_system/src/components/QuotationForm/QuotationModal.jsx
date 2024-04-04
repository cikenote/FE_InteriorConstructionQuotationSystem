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
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { FORM_RULES } from "../../utils/constant";
import QuotationAPI from "../../api/quotation";

const QuotationModal = ({ AfterCloseModal, QuotationUpdate }, ref) => {
  const [form] = Form.useForm();
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
      quotationId: QuotationUpdate.quotationId,
      quotationStatus: response.quotationStatus,
      message: response.message,
    });
  };

  useEffect(() => {
    if (QuotationUpdate) {
      form.setFieldValue("quotationStatus", QuotationUpdate.quotationStatus);
    }
  }, [QuotationUpdate]);

  return (
    <Modal
      visible={isOpenModal}
      onCancel={onCloseModal}
      title="Update Quotation"
      closeIcon={false}
      footer={null}
    >
      {contextHolder}
      <Form layout="vertical" onFinish={onSubmitForm} form={form}>
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
            <Flex justify="end" gap="middle">
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