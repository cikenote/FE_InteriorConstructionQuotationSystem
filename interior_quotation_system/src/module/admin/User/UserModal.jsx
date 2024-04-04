import { useMutation } from "@tanstack/react-query";
import { Button, Col, Form, Input, Modal, Row, message } from "antd";
import PropTypes from "prop-types";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import AccountManagerAPI from "../../../api/User/index";
import { FORM_RULES } from "../../../utils/constant";

const UserModal = ({ userUpdate }, ref) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [users, setUsers] = useState([]);

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
      // After user creation, update the user list
      fetchUsers();
    },
  });

  useImperativeHandle(ref, () => ({
    openModal: () => setIsOpenModal(true),
  }));

  useEffect(() => {
    // Fetch users when the component mounts
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // Fetch users from API
      const response = await AccountManagerAPI.fetchUsers();
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

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

          {/* Other form fields */}
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
              {/* Render other user information as needed */}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

UserModal.propTypes = {
  userUpdate: PropTypes.bool.isRequired,
};

export default forwardRef(UserModal);
