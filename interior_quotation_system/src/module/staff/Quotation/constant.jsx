import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Button, Flex, Tag, Typography } from "antd";
import { LuEye } from "react-icons/lu";

export const QUOTATION_COLUMNS = ({ viewProductDetail, onEditQuotation }) => [
  {
    title: "Id",
    dataIndex: "$id",
    key: "$id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    // render: (status) => (
    //   <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
    // ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Total",
    dataIndex: "quantity",
    key: "quantity",
    render: (quantity, data) => (
      <Typography>{data.price * data.quantity}$</Typography>
    ),
  },
  {
    title: "Details",
    dataIndex: "productId",
    key: "productId",
    render: (id) => (
      <Button background="clear" icon={<LuEye />} onClick={() => viewProductDetail(id)}>
        View detail
      </Button>
    ),
  },
  {
    title: "Actions",
    dataIndex: "productId",
    key: "productId",
    render: (id) => (
      <Flex gap="middle">
        <Button icon={<EditOutlined />} type="primary" onClick={() => onEditQuotation(id)} />
        <Button icon={<DeleteOutline />} danger />
      </Flex>
    ),
  },
];

export const QUOTATION_DATA_SOURCE = () => [
  {
    id: "1",
    status: "Active",
    createdAt: "02/05/2024",
    details: "Detail",
  },
  {
    id: "2",
    status: "Inactive",
    createdAt: "02/05/2024",
    details: "Detail",
  },
];
