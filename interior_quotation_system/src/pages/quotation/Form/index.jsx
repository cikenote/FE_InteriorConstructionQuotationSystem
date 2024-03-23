import React, { useEffect, useRef } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import {
  Button,
  Checkbox,
  Col,
  Flex,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Skeleton,
  Spin,
  Table,
  Typography,
  message,
} from "antd";
import "./styled.scss";
import {
  DATA_SELECT_FAKE,
  DATA_SELECT_FAKE_2,
  DATA_SELECT_FAKE_3,
  DATA_SELECT_FAKE_4,
  PRODUCTS_LIST_MOCK,
  PRODUCT_MOCK,
} from "./constant";
import { useMutation, useQuery } from "@tanstack/react-query";
import ProductAPI from "../../../api/products";
import HomeParameterModal from "./HomeParameterModal";
import QuotationAPI from "../../../api/quotation";

const QuotationFormPage = () => {
  const homeParameterRef = useRef();

  const { isLoading: isLoadingCurrentQuotation, data: currentQuotation } =
    useQuery({
      queryFn: QuotationAPI.GetCurrentQuotation,
      queryKey: ["current-quotation"],
    });

  const { isPending: isProductStyleLoading, data: productStyles } = useQuery({
    queryFn: ProductAPI.getListStyle,
    queryKey: ["product-style-list"],
  });

  const { isPending: isHomeStyleLoading, data: homeStyles } = useQuery({
    queryFn: ProductAPI.getListHomeStyle,
    queryKey: ["home-style-list"],
  });

  if (
    isHomeStyleLoading ||
    isProductStyleLoading ||
    isLoadingCurrentQuotation
  ) {
    return <Skeleton avatar paragraph={{ rows: 4 }} />;
  }

  return (
    <>
      <HomeParameterModal ref={homeParameterRef} />

      <Navbar></Navbar>
      <div className="form-container">
        <div className="content">
          <Row gutter={[14, 14]} className="content-detail">
            <Col span={8}>
              <Flex className="layout-item" vertical>
                <p className="title">Bảng giá niêm yết</p>
                <Flex vertical gap="middle">
                  <Typography.Title level={4}>
                    Loại nhà thi công:{" "}
                  </Typography.Title>
                  <Flex vertical gap="middle">
                    <Typography.Text
                      style={{
                        marginLeft: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      + Biệt thự: Giá mặc định là 350.000VND/m
                      <sup>2</sup>{" "}
                    </Typography.Text>
                    <Typography.Text
                      style={{
                        marginLeft: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      + Chung cư: Giá mặc định là 220.000VND/m
                      <sup>2</sup>{" "}
                    </Typography.Text>
                    <Typography.Text
                      style={{
                        marginLeft: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      + Nhà phố: Giá mặc định là 220.000VND/m
                      <sup>2</sup>{" "}
                    </Typography.Text>
                    <Typography.Text
                      style={{
                        marginLeft: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      + Văn phòng - Cafe: Giá mặc định là 200.000VND/m
                      <sup>2</sup>{" "}
                    </Typography.Text>
                  </Flex>
                </Flex>
                <Flex vertical gap="middle">
                  <Typography.Title level={4}>
                    Loại hình thi công:{" "}
                  </Typography.Title>
                  <Flex vertical gap="middle">
                    <Typography.Text
                      style={{
                        marginLeft: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      Ốp nền: (Chiều dài x Chiều rộng){" "}
                    </Typography.Text>

                    <Typography.Text
                      style={{
                        marginLeft: "2rem",
                        fontWeight: "bold",
                      }}
                    >
                      + Bằng gạch: Giá măc định là 200.000VND/m
                      <sup>2</sup>
                    </Typography.Text>

                    <Typography.Text
                      style={{
                        marginLeft: "2rem",
                        fontWeight: "bold",
                      }}
                    >
                      + Bằng gỗ: Giá măc định là 350.000VND/m
                      <sup>2</sup>
                    </Typography.Text>
                  </Flex>
                  <Flex vertical gap="middle">
                    <Typography.Text
                      style={{
                        marginLeft: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      Tường:{" "}
                    </Typography.Text>

                    <Typography.Text
                      style={{
                        marginLeft: "2rem",
                        fontWeight: "bold",
                      }}
                    >
                      + Sơn tường: Giá măc định là 150.000VND/m
                      <sup>2</sup>
                    </Typography.Text>

                    <Typography.Text
                      style={{
                        marginLeft: "2rem",
                        fontWeight: "bold",
                      }}
                    >
                      + Dán tường: Giá măc định là 250.000VND/m
                      <sup>2</sup>
                    </Typography.Text>
                  </Flex>

                  <Flex vertical gap="middle">
                    <Typography.Text
                      style={{
                        marginLeft: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      Trần nhà:{" "}
                    </Typography.Text>

                    <Typography.Text
                      style={{
                        marginLeft: "2rem",
                        fontWeight: "bold",
                      }}
                    >
                      + Thạch cao chống cháy: Giá măc định là 100.000VND/m
                      <sup>2</sup>
                    </Typography.Text>

                    <Typography.Text
                      style={{
                        marginLeft: "2rem",
                        fontWeight: "bold",
                      }}
                    >
                      + Thạch cao tiêu âm: Giá măc định là 200.000VND/m
                      <sup>2</sup>
                    </Typography.Text>
                  </Flex>
                </Flex>

                {/* Loại nhà thi công */}
                <Flex vertical gap="middle">
                  <Typography.Title level={4}>
                    Phong cách thiết kế:{" "}
                  </Typography.Title>
                  <Flex vertical gap="middle">
                    <Typography.Text
                      style={{
                        marginLeft: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      + Cố điển: Giá mặc định là 350.000VND/m
                      <sup>2</sup>{" "}
                    </Typography.Text>
                    <Typography.Text
                      style={{
                        marginLeft: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      + Tân cổ điển: Giá mặc định là 220.000VND/m
                      <sup>2</sup>{" "}
                    </Typography.Text>
                    <Typography.Text
                      style={{
                        marginLeft: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      + Nhật Bản: Giá mặc định là 220.000VND/m
                      <sup>2</sup>{" "}
                    </Typography.Text>
                    <Typography.Text
                      style={{
                        marginLeft: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      + Ý: Giá mặc định là 200.000VND/m
                      <sup>2</sup>{" "}
                    </Typography.Text>
                  </Flex>
                </Flex>
              </Flex>
            </Col>
            <Col span={8}>
              <Flex className="layout-item" vertical>
                <p className="title">Danh sách sản phẩm</p>
                <Table columns={PRODUCTS_LIST_MOCK} dataSource={PRODUCT_MOCK} />
              </Flex>
            </Col>
            <Col span={8}>
              <Flex className="layout-item" vertical>
                <p className="title">Bảng giá dự tính</p>

                <div
                  className="home-content"
                  onClick={() => homeParameterRef.current.openModal()}
                >
                  <Button type="primary" size="large" style={{ width: "100%" }}>
                    Nhập số liệu{" "}
                  </Button>
                </div>

                {/* 
                <Form layout="vertical">
                  <Row gutter={[20, 20]}>
                    <Col span={24}>
                      <Form.Item
                        className="title-label"
                        label="1. Loại nhà thi công"
                      >
                        <Select>
                          {homeStyles.$values.map((style) => (
                            <Select.Option value={style.id}>
                              {style.name}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>

                      <Form.Item className="title-label" label="2. Kích thước">
                        <Row
                          gutter={[12, 12]}
                          style={{
                            marginTop: "1rem",
                          }}
                        >
                          <Col span={12}>
                            <Flex gap="middle">
                              <p
                                style={{
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Chiều dài:{" "}
                              </p>
                              <Input width={"50%"} />
                            </Flex>
                          </Col>
                          <Col span={12}>
                            <Flex gap="middle">
                              <p
                                style={{
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Chiều rộng:{" "}
                              </p>
                              <Input />
                            </Flex>
                          </Col>
                          <Col span={24}>
                            <Flex gap="middle">
                              <p
                                style={{
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Chiều cao:{" "}
                              </p>
                              <Input />
                            </Flex>
                          </Col>
                        </Row>
                      </Form.Item>

                      <Form.Item
                        className="title-label"
                        label="3. Loại hình thi công"
                      >
                        <Flex
                          gap="middle"
                          vertical
                          style={{
                            marginTop: "1rem",
                          }}
                        >
                          <Flex gap="middle">
                            <p
                              style={{
                                whiteSpace: "nowrap",
                                width: "40%",
                              }}
                            >
                              Ốp nền:{" "}
                            </p>
                            <Select options={DATA_SELECT_FAKE_2} />
                          </Flex>

                          <Flex gap="middle">
                            <p
                              style={{
                                whiteSpace: "nowrap",
                                width: "40%",
                              }}
                            >
                              Ốp tường:{" "}
                            </p>
                            <Select options={DATA_SELECT_FAKE_3} />
                          </Flex>

                          <Flex gap="middle">
                            <p
                              style={{
                                whiteSpace: "nowrap",
                                width: "40%",
                              }}
                            >
                              Trần nhà:{" "}
                            </p>
                            <Select options={DATA_SELECT_FAKE_4} />
                          </Flex>
                        </Flex>
                      </Form.Item>

                      <Form.Item
                        className="title-label"
                        label="4. Phong cách thiết kế"
                      >
                        <Radio.Group>
                          <Flex
                            gap="middle"
                            vertical
                            style={{
                              marginTop: "1rem",
                            }}
                          >
                            {productStyles.$values.map((item) => {
                              console.log(item);
                              return (
                                <Radio values={item.id}>{item.name}</Radio>
                              );
                            })}
                          </Flex>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form> */}
              </Flex>
            </Col>
          </Row>

          <Row>
            <Col span={24} className="total-bill">
              <Flex gap="middle" vertical>
                <p className="price-label">
                  Tổng giá tiền thi công :{" "}
                  <span className="price">20.000.000VND</span>
                </p>

                <p className="price-label">
                  Tổng giá tiền sản phẩm :{" "}
                  <span className="price">50.000.000VND</span>
                </p>
              </Flex>

              <p className="total-price">Thành tiền: 70.000.000VND</p>

              <Flex gap="middle">
                <Button size="large">Hủy Hóa Đơn</Button>
                <Button type="primary" size="large">
                  Lưu Hóa Đơn
                </Button>
              </Flex>
            </Col>
          </Row>
          <footer>
            <p>
              Báo giá trên chỉ mang tính chất tham khảo. Vui lòng liên hệ sale
              qua hotline: 0987654321
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default QuotationFormPage;
