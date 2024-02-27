import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Button, Flex } from "antd";

export const PRODUCT_COLUMNS = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image) => (
      <img
        alt="image-alt"
        src={image}
        style={{
          height: "60px",
          objectFit: "cover",
          borderRadius: "8px",
          width: "100%",
        }}
      />
    ),
  },
  {
    title: "Actions",
    dataIndex: "action",
    key: "action",
    render: () => (
      <Flex gap="middle">
        <Button icon={<EditOutlined />} type="primary" />
        <Button icon={<DeleteOutline />} danger />
      </Flex>
    ),
  },
];

export const PRODUCT_DATA_SOURCE = [
  {
    name: "Project 1",
    price: "120$",
    description: "This is a new description",
    quantity: "99",
    image:
      "https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/Ori-furniture-3_qnlft8.jpg",
  },

  
];
