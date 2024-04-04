import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Button, Flex } from "antd";

export const USER_COLUMNS = ({ onDeleteUser }) => [
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Full Name",
    dataIndex: "fullname",
    key: "fullname",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Actions",
    dataIndex: "userId",
    key: "userId",
    render: (id) => (
      <Flex gap="middle">
        <Button icon={<EditOutlined />} type="primary" />
        <Button
          icon={<DeleteOutline />}
          danger
          onClick={() => onDeleteUser(id)}
        />
      </Flex>
    ),
  },
];

export const USER_DATA_SOURCE = () => [
  {
    username: "john_doe",
    fullname: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1234567890",
  },
  {
    username: "jane_doe",
    fullname: "Jane Doe",
    email: "jane.doe@example.com",
    phoneNumber: "+0987654321",
  },
  {
    username: "alice_smith",
    fullname: "Alice Smith",
    email: "alice.smith@example.com",
    phoneNumber: "+1122334455",
  },
];
