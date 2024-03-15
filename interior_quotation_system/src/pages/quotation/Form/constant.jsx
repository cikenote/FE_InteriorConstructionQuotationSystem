import { Checkbox, Image, Tag } from "antd";

export const PRODUCTS_LIST_MOCK = [
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
        title: "Chọn",
        dataIndex: "action",
        render: () => <Checkbox />,
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

export const PRODUCT_MOCK = [
    {
        stt: 1,
        name: "Product 1",
        img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        action: "stt",
    },
    {
        stt: 1,
        name: "Product 1",
        img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        action: "stt",
    },
    {
        stt: 1,
        name: "Product 1",
        img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        action: "stt",
    },
    {
        stt: 1,
        name: "Product 1",
        img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        action: "stt",
    },
];

export const PRODUCT_MOCK_2 = [
    {
        stt: 1,
        name: "Product 1",
        img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        action: "299.9$",
    },
    {
        stt: 1,
        name: "Product 1",
        img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        action: "299.9$",
    },
    {
        stt: 1,
        name: "Product 1",
        img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        action: "299.9$",
    },
    {
        stt: 1,
        name: "Product 1",
        img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        action: "299.9$",
    },
];

export const DATA_SELECT_FAKE = [
    {
        label: "This is a sample data",
        value: "data",
    },
    {
        label: "This is a sample data",
        value: "data",
    },
    {
        label: "This is a sample data",
        value: "data",
    },
    {
        label: "This is a sample data",
        value: "data",
    },
];
