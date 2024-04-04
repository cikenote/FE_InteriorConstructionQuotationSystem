import { useMutation } from "@tanstack/react-query";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Switch,
  message,
} from "antd";
import PropTypes from "prop-types";
import { forwardRef, useImperativeHandle, useState } from "react";
import AccountManagerAPI from "../../../api/User";
import { FORM_RULES } from "../../../utils/constant";

const UserModal = ({ userUpdate }, ref) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [form] = Form.useForm();

  const { mutate: mutateCreateNewUser } = useMutation({
    mutationFn: AccountManagerAPI.createUser,
    onError: (error) => {
      message.error(error);
    },
    onSuccess: () => {
      message.success("User created successfully");
      onCloseModal();
      form.resetFields();
    },
  });

  useImperativeHandle(ref, () => ({
    openModal: () => setIsOpenModal(true),
  }));

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onFinishForm = (values) => {
    mutateCreateNewUser(values);
  };

  return (
    <Modal
      title={userUpdate ? "Update User" : "New User"}
      visible={isOpenModal}
      onCancel={onCloseModal}
      footer={null}
    >
      <Form form={form} onFinish={onFinishForm} layout="vertical">
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <Form.Item
              name="username"
              label="Username"
              rules={[FORM_RULES.required]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="password"
              label="Password"
              rules={[FORM_RULES.required]}
            >
              <Input.Password />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="fullname"
              label="Full Name"
              rules={[FORM_RULES.required]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="birthdate"
              label="Birthdate"
              rules={[FORM_RULES.required]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="email"
              label="Email"
              rules={[FORM_RULES.required, FORM_RULES.email]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="phoneNumber"
              label="Phone Number"
              rules={[FORM_RULES.required]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="avtUrl" label="Avatar URL">
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="roleId" label="Role ID">
              <Input type="number" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="status" label="Status" valuePropName="checked">
              <Switch />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {userUpdate ? "Update" : "Create"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
UserModal.propTypes = {
  userUpdate: PropTypes.bool.isRequired, // Example prop type validation
};
export default forwardRef(UserModal);
