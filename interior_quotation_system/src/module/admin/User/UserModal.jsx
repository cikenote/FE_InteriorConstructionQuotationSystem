import { useMutation } from "@tanstack/react-query";
import { Button, Col, Form, Input, Modal, Row, message } from "antd";
import PropTypes from "prop-types";
import { forwardRef, useImperativeHandle, useState } from "react";
import AccountManagerAPI from "../../../api/User/index";
import { FORM_RULES } from "../../../utils/constant";

const UserModal = forwardRef(({ userUpdate }, ref) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [users] = useState([]); // Issue: users state is not being updated with fetched data

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
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {userUpdate ? "Update" : "Create"}
          </Button>
        </Form.Item>
      </Form>

      {/* Display user list */}
      <div>
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.userId}>
              <strong>Username:</strong> {user.username}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
});

UserModal.propTypes = {
  userUpdate: PropTypes.bool.isRequired,
};

UserModal.displayName = "UserModal";

export default UserModal;
