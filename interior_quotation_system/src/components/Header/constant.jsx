import { Button, Tag, Typography } from "antd";
import { FormatCurrency } from "../../utils/helper";
import dayjs from "dayjs";

export const HeaderMenus = [
  {
    key: "login",
    label: "Login account",
  },
];

export const QUOTATIONS_COLUMNS = ({ viewQuotationDetail }) => [
  {
    dataIndex: "totalProductCost",
    title: "Total Product Cost",
    render: (price) => <Typography>{FormatCurrency.format(price)}</Typography>,
  },
  {
    dataIndex: "totalConstructionCost",
    title: "Total Construction Cost",
    render: (price) => <Typography>{FormatCurrency.format(price)}</Typography>,
  },
  {
    dataIndex: "totalBill",
    title: "Total Bill",
    render: (price) => <Typography>{FormatCurrency.format(price)}</Typography>,
  },
  {
    dataIndex: "quotationStatus",
    title: "Status",
    render: (status) => (
      <Tag
        color={`${
          status === "Pending" ? "blue" : status === "Cancel" ? "red" : "green"
        }`}
      >
        {status}
      </Tag>
    ),
  },
  {
    dataIndex: "createdAt",
    title: "Created At",
    render: (date) => <p>{dayjs(date).format("MM/DD/YYYY HH:mm A")}</p>,
  },
  {
    dataIndex: "totalBill",
    title: "Action",
    render: (totalBill, data) => (
      <Button type="primary" onClick={() => viewQuotationDetail(data)}>
        View Detail
      </Button>
    ),
  },
];
