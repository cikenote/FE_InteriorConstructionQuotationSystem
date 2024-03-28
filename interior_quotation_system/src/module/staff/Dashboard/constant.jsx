import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Button, Flex } from "antd";

export const PROJECT_COLUMNS = () => [
  
  {
    title: "NumberProduct",
    dataIndex: "numberProduct",
    key: "numberProduct",
  },
  {
    title: "NumberUser",
    dataIndex: "numberUser",
    key: "numberUser",
  },
  
  {
    title: "NumberCategory",
    dataIndex: "numberCategory",
    key: "numberCategory",
  },
  {
    title: "NumberContract",
    dataIndex: "numberContract",
    key: "numberContract",
  },

];

export const PROJECT_DATA_SOURCE = () => [
  {
    numberProduct: "12",
    numberUser: "22",
    numberCategory: "34",
    numberContract: "34",
  },

  
];
