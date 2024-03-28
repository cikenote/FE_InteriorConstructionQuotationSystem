import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Button, Flex, Tag, Typography } from "antd";
import dayjs from "dayjs";
import { LuEye } from "react-icons/lu";

export const QUOTATION_COLUMNS = ({
  viewProductDetail,
  onEditQuotation,
  onDeleteQuotation,
}) => [
  {
    title: "Id",
    dataIndex: "$id",
    key: "$id",
  },
  // {
  //   title: "Full Name",
  //   dataIndex: "user",
  //   key: "user",
  //   render: (user) => <Typography>{user?.fullname || ""}</Typography>,
  // },
  {
    title: "Status",
    dataIndex: "quotationStatus",
    key: "quotationStatus",
    render: (status) => <Tag color="green">{status}</Tag>,
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (date) => (
      <Typography>{dayjs(date).format("MM-DD-YYYY")}</Typography>
    ),
  },
  // {
  //   title: "Style",
  //   dataIndex: "style",
  //   key: "style",
  //   render: (style) => <Typography>{style?.name || "-"}</Typography>,
  // },
  // {
  //   title: "Price",
  //   dataIndex: "style",
  //   key: "style",
  // },
  // {
  //   title: "Quantity",
  //   dataIndex: "quantity",
  //   key: "quantity",
  // },
  {
    title: "Total Bill",
    dataIndex: "totalBill",
    key: "totalBill",
  },
  {
    title: "Actions",
    dataIndex: "productId",
    key: "productId",
    render: (id) => (
      <Flex gap="middle">
        <Button
          icon={<EditOutlined />}
          type="primary"
          onClick={() => onEditQuotation(id)}
        />
        <Button
          icon={<DeleteOutline />}
          danger
          onClick={() => onDeleteQuotation(id)}
        />
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
