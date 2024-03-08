import { Edit } from "@mui/icons-material";
import { Button, Flex, Image, Typography } from "antd";

export const QuotationColumns = ({ onEditQuotation }) => [
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
    title: "Total",
    dataIndex: "quantity",
    key: "quantity",
    render: (quantity, data) => (
      <Typography>{data.price * data.quantity}$</Typography>
    ),
  },
  {
    title: "Image",
    dataIndex: "imageUrl",
    key: "imageUrl",
    render: (image) => <Image src={image} height={80} />,
  },
  {
    title: "Actions",
    dataIndex: "productId",
    key: "productId",
    render: (id) => (
      <Flex>
        <Button icon={<Edit />} onClick={() => onEditQuotation(id)} />
      </Flex>
    ),
  },
];
