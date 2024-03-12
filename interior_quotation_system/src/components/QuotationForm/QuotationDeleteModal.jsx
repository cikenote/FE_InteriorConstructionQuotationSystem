import { Button, Col, Flex, Form, Input, Modal, Row, message } from 'antd';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { FORM_RULES } from '../../utils/constant';
import { useMutation } from '@tanstack/react-query';
import QuotationAPI from '../../api/quotation';
import { jwtDecode } from 'jwt-decode';

const QuotationDeleteModal = ({ AfterCloseModal }, ref) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [productId, setProductId] = useState(15);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const accessToken = localStorage.getItem('accessToken');
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
    mutationFn: () => QuotationAPI.DeleteQuotation(userDecode?.UserID, productId),
    onError: () => {
      messageApi.open({
        type: 'error',
        content: 'Error occur when delete quotation',
      });
    },
    onSuccess: () => {
      messageApi.open({
        type: 'success',
        content: 'Delete quotation is successfully',
      });

      setIsOpenModal(false);
      AfterCloseModal();
    },
  });

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onSubmitForm = (response) => {
  
    mutate({
      productId,
      userId: parseInt(userDecode?.UserID),
    });
  };

  return (
    <Modal
      open={isOpenModal}
      onCancel={onCloseModal}
      title='Delete Quotation'
      closeIcon={false}
      footer
    >
      {contextHolder}
      <Form layout='vertical' onFinish={onSubmitForm}>
        <Row gutter={[10, 10]}>
          <span>Do you want to delete this quotation?</span>
          <Col span={24}>
            <Flex justify='end' gap={4}>
              <Button onClick={onCloseModal}>Cancel</Button>
              <Button
                type='primary'
                htmlType='submit'
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

export default forwardRef(QuotationDeleteModal);
