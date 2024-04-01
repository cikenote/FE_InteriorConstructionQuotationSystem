import { Tag, Typography } from "antd";
import { FormatCurrency } from "../../utils/helper";

export const HeaderMenus = [
  {
    key: "login",
    label: "Login account",
  },
];

export const QUOTATIONS_COLUMNS = [
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
    render: (status) => <Tag color={"geekblue"}>{status}</Tag>,
  },
];
