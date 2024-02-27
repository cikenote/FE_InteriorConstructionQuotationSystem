import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Button, Flex } from "antd";

export const PROJECT_COLUMNS = () => [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Style",
    dataIndex: "style",
    key: "style",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
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
    title: "Start date",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "End Date",
    dataIndex: "endDate",
    key: "endDate",
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

export const PROJECT_DATA_SOURCE = () => [
  {
    title: "Project 1",
    style: "New style",
    description: "This is a new description",
    image:
      "https://images.unsplash.com/photo-1707343843344-011332037abb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    startDate: "05/02/2024",
    endDate: "15/02/2024",
  },

  {
    title: "Project 1",
    style: "New style",
    description: "This is a new description",
    image:
      "https://images.unsplash.com/photo-1707343843344-011332037abb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    startDate: "05/02/2024",
    endDate: "15/02/2024",
  },

  {
    title: "Project 1",
    style: "New style",
    description: "This is a new description",
    image:
      "https://images.unsplash.com/photo-1707343843344-011332037abb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    startDate: "05/02/2024",
    endDate: "15/02/2024",
  },
];
