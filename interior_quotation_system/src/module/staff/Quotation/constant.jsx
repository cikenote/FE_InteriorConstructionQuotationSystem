import { EditOutlined } from "@mui/icons-material";
import { Button, Flex, Tag, Tooltip } from "antd";
import { GrContract } from "react-icons/gr";
import { IoContract } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

export const QUOTATION_COLUMNS = ({
  viewProductDetail,
  onEditQuotation,
  sendContract,
}) => [
  {
    title: "Id",
    dataIndex: "$id",
    key: "$id",
  },
  {
    title: "Full Name",
    dataIndex: "fullname",
    key: "fullname",
  },
  {
    title: "Status",
    dataIndex: "quotationStatus",
    key: "quotationStatus",
    render: (status) => (
      <Tag
        color={`${
          status === "Pending" ? "blue" : status === "Cancel" ? "red" : "green"
        }`}
      >
        {status}
      </Tag>
    ),
    sorter: (a, b) => a.quotationStatus.length - b.quotationStatus.length,
    sortDirections: ["descend"],
  },
  {
    title: "Total Bill",
    dataIndex: "totalBill",
    key: "totalBill",
  },
  {
    title: "Actions",
    dataIndex: "quotationId",
    key: "quotationId",
    render: (id, quotation) => (
      <Flex gap="middle">
        {quotation.quotationStatus === "Pending" && (
          <Button
            icon={<EditOutlined />}
            onClick={() => onEditQuotation(quotation)}
          />
        )}

        <Tooltip title="View detail quotation">
          <Button
            icon={<LuEye />}
            type="primary"
            onClick={() => viewProductDetail(quotation)}
          />
        </Tooltip>

        {quotation.quotationStatus === "Pending" && (
          <Tooltip title="Send contract">
            <Button
              icon={<IoContract />}
              type="primary"
              onClick={() => sendContract(id)}
            />
          </Tooltip>
        )}
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
