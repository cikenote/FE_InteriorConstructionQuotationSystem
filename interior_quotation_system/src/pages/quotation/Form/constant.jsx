import { Checkbox, Image, Tag } from "antd";
import { FormatCurrency } from "../../../utils/helper";

export const PRODUCTS_LIST_MOCK = ({ onSelectedProduct }) => [
  {
    title: "Tên sản phẩm",
    dataIndex: "name",
  },
  {
    title: "Ảnh",
    dataIndex: "image",
    render: (img) => <Image alt="product-alt" src={img} width={100} />,
  },
  {
    title: "Giá",
    dataIndex: "price",
    render: (price) => (
      <Tag color="geekblue">{FormatCurrency.format(price * 1000)}</Tag>
    ),
  },
  {
    title: "Chọn",
    dataIndex: "action",
    render: (id, product) => (
      <Checkbox onChange={() => onSelectedProduct(product)} />
    ),
  },
];

export const PRODUCTS_LIST_MOCK_2 = [
  {
    title: "STT",
    dataIndex: "stt",
  },
  {
    title: "Tên sản phẩm",
    dataIndex: "name",
  },
  {
    title: "Ảnh",
    dataIndex: "img",
    render: (img) => <Image alt="product-alt" src={img} width={100} />,
  },
  {
    title: "Giá tiền",
    dataIndex: "action",
    render: (price) => <Tag color="green">{price}</Tag>,
  },
];





export const DATA_SELECT_FAKE = [
  {
    label: "Biệt thự",
    value: "data",
  },
  {
    label: "Chung cư",
    value: "data",
  },
  {
    label: "Nhà phố",
    value: "data",
  },
  {
    label: "Văn phòng - Cafe",
    value: "data",
  },
];

export const FLOOR_DATA = [
  {
    label: "Bằng gạch",
    value: 1,
  },
  {
    label: "Bằng gỗ",
    value: 2,
  },
];

export const WALL_DATA = [
  {
    label: "Sơn Tường",
    value: 3,
  },
  {
    label: "Dán Tường",
    value: 4,
  },
];

export const CEIL_DATA = [
  {
    label: "Thạch cao chống cháy",
    value: 5,
  },
  {
    label: "Thạch cao tiêu âm",
    value: 6,
  },
];
