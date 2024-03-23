import { Form, Input, Modal } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";
const HomeParameterModal = ({}, ref) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => {
    return {
      openModal: (id) => {
        setIsOpenModal(true);
      },
    };
  });

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onFinishForm = (values) => {
    console.log(values);
  };

  return (
    <Modal
      open={isOpenModal}
      onCancel={onCloseModal}
      title="Home Parameter"
      closeIcon={false}
      footer={(_, { OkBtn, CancelBtn }) => {
        return (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        );
      }}
    >
      <Form layout="vertical" onFinish={onFinishForm} form={form}>
        <Form.Item
          name="length"
          label="Chiều dài"
          rules={[
            { required: true, message: "Trường này không được bỏ trống" },
            { min: 0, message: "Hello world" },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          name="width"
          label="Chiều rộng"
          rules={[
            { required: true, message: "Trường này không được bỏ trống" },
            { min: 0, message: "Giá trị tối thiểu là 0" },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          name="height"
          label="Chiều cao"
          rules={[
            { required: true, message: "Trường này không được bỏ trống" },
            { min: 0, message: "Giá trị tối thiểu là 0" },
          ]}
        >
          <Input type="number" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default forwardRef(HomeParameterModal);
