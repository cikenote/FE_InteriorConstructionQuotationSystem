import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Button, Flex } from "antd";

export const PRODUCT_COLUMNS = ({ onDeleteQuotation }) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Image",
    dataIndex: "imageUrl",
    key: "imageUrl",
    render: (image) => (
      <img
        alt="image-alt"
        src={image}
        style={{
          height: "100px",
          objectFit: "cover",
          borderRadius: "8px",
          width: "150%",
        }}
      />
    ),
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
    title: "Actions",
    dataIndex: "productId",
    key: "productId",
    render: (id) => (
      <Flex gap="middle">
        <Button icon={<EditOutlined />} type="primary" />
        <Button
          icon={<DeleteOutline />}
          danger
          onClick={() => onDeleteQuotation(id)}
        />
      </Flex>
    ),
  },
];

export const PRODUCT_DATA_SOURCE = () => [
  {
    title: "Project 1",
    style: "New style",
    description: "This is a new description",
    image:
      "https://res.cloudinary.com/dnzzvunuu/image/upload/v1706592703/pngtree-home-interior-living-area-with-minimalist-3d-render-image_3770536_pa6hjr.jpg",
    startDate: "05/02/2024",
    endDate: "15/02/2024",
  },

  {
    title: "Project 1",
    style: "New style",
    description: "This is a new description",
    image:
      "https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/ghe-don-sofa-vai-cao-cap-furnist-bora-do_svg23w.jpg",
    startDate: "05/02/2024",
    endDate: "15/02/2024",
  },

  {
    title: "Project 1",
    style: "New style",
    description: "This is a new description",
    image:
      "https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/cac-dong-san-pham-cua-noi-that-the-one-5_smjptc.jpg",
    startDate: "05/02/2024",
    endDate: "15/02/2024",
  },
];
