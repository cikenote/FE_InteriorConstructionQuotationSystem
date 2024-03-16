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
        name: "Ghế ăn gỗ",
        img: "https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/cac-dong-san-pham-cua-noi-that-the-one-5_smjptc.jpg",
        action: "stt",
    },
    {
        stt: 1,
        name: "Cỏ lau nhà Pampas",
        img: "https://res.cloudinary.com/dnzzvunuu/image/upload/v1706592703/pngtree-home-interior-living-area-with-minimalist-3d-render-image_3770536_pa6hjr.jpg",
        action: "stt",
    },
    {
        stt: 1,
        name: "Bàn cà phê kính",
        img: "https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/Ori-furniture-3_qnlft8.jpg",
        action: "stt",
    },
    {
        stt: 1,
        name: "Bàn ăn tròn",
        img: "https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/n%E1%BB%99i-th%E1%BA%A5t-in-3d-15_zqm0wq.jpg",
        action: "stt",
    },
    {
        stt: 1,
        name: "Bàn ăn tròn",
        img: "https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/n%E1%BB%99i-th%E1%BA%A5t-in-3d-15_zqm0wq.jpg",
        action: "stt",
    },
    {
        stt: 1,
        name: "Bàn ăn tròn",
        img: "https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/n%E1%BB%99i-th%E1%BA%A5t-in-3d-15_zqm0wq.jpg",
        action: "stt",
    },
    {
        stt: 1,
        name: "Bàn ăn tròn",
        img: "https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/n%E1%BB%99i-th%E1%BA%A5t-in-3d-15_zqm0wq.jpg",
        action: "stt",
    },
    {
        stt: 1,
        name: "Bàn ăn tròn",
        img: "https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/n%E1%BB%99i-th%E1%BA%A5t-in-3d-15_zqm0wq.jpg",
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

export const DATA_SELECT_FAKE_2 = [
    {
        label: "Bằng gạch",
        value: "data",
    },
    {
        label: "Bằng gỗ",
        value: "data",
    },
];

export const DATA_SELECT_FAKE_3 = [
    {
        label: "Sơn tường",
        value: "data",
    },
    {
        label: "Dán tường",
        value: "data",
    },
];

export const DATA_SELECT_FAKE_4 = [
    {
        label: "Thạch cao",
        value: "data",
    },
    {
        label: "Bê tông",
        value: "data",
    },
];
