import { Form, Input, Modal } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";
import { FORM_RULES } from "../../../utils/constant";

const HomeParameterModal = ({ CallBackParameter }, ref) => {
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
    CallBackParameter(values);
    onCloseModal();
  };

  return (
    <Modal
      open={isOpenModal}
      onCancel={onCloseModal}
      title="Home Parameter"
      closeIcon={false}
      onOk={form.submit}
      footer={(_, { OkBtn, CancelBtn }) => {
        return (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        );
      }}
    >
      <Form name="myForm" layout="vertical" onFinish={onFinishForm} form={form}>
        <Form.Item name="length" label="Length" rules={[FORM_RULES.required]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name="witdh" label="Width" rules={[FORM_RULES.required]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name="height" label="Height" rules={[FORM_RULES.required]}>
          <Input type="number" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default forwardRef(HomeParameterModal);
