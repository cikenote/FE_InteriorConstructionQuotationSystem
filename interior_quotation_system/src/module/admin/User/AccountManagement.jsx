import { DatePicker, Form, Input, Modal, message } from "antd";
import axios from "axios";
import PropTypes from "prop-types";

const AccountManagement = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      // Send a POST request to create a new account
      await axios.post("/api/AccountManager", values);
      message.success("Account created successfully");
      onClose();
    } catch (error) {
      message.error("Failed to create account");
    }
  };

  return (
    <Modal
      title="Create New Account"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please enter username" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter password" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="fullname"
          label="Full Name"
          rules={[{ required: true, message: "Please enter full name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="birthdate"
          label="Birthdate"
          rules={[{ required: true, message: "Please select birthdate" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please enter email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[{ required: true, message: "Please enter phone number" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <button type="submit">Create Account</button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
AccountManagement.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default AccountManagement;
