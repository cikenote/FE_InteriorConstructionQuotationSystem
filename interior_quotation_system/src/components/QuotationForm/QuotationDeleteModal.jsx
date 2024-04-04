import PropTypes from "prop-types"; // Import PropTypes

import { useMutation } from "@tanstack/react-query";
import { Button, Col, Flex, Form, Modal, Row, message } from "antd";
import { jwtDecode } from "jwt-decode";
import { forwardRef, useImperativeHandle, useState } from "react";
import QuotationAPI from "../../api/quotation";

const QuotationDeleteModal = ({ AfterCloseModal }, ref) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [productId, setProductId] = useState(15);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const accessToken = localStorage.getItem("accessToken");
  const userDecode = jwtDecode(accessToken);

  useImperativeHandle(ref, () => {
    return {
      openModal: (id) => {
        setProductId(id);
        setIsOpenModal(true);
      },
    };
  });

  const { mutate, isPending: deleteMutationLoading } = useMutation({
    mutationFn: () =>
      QuotationAPI.DeleteQuotation(userDecode?.UserID, productId),
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Error occur when delete quotation",
      });
    },
    onSuccess: () => {
      messageApi.open({
        type: "success",
        content: "Delete quotation is successfully",
      });

      setIsOpenModal(false);
      AfterCloseModal();
    },
  });

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onSubmitForm = () => {
    mutate({
      productId,
      userId: parseInt(userDecode?.UserID),
    });
  };

  return (
    <Modal
      open={isOpenModal}
      onCancel={onCloseModal}
      title="Delete Quotation"
      closeIcon={false}
      footer
    >
      {contextHolder}
      <Form layout="vertical" onFinish={onSubmitForm}>
        <Row gutter={[10, 10]}>
          <span>Do you want to delete this quotation?</span>
          <Col span={24}>
            <Flex justify="end" gap={4}>
              <Button onClick={onCloseModal}>Cancel</Button>
              <Button
                type="primary"
                htmlType="submit"
                loading={deleteMutationLoading}
              >
                Delete
              </Button>
            </Flex>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

// Add propTypes validation
QuotationDeleteModal.propTypes = {
  AfterCloseModal: PropTypes.func.isRequired,
};

export default forwardRef(QuotationDeleteModal);
