import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import {
  Button,
  Checkbox,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Table,
} from "antd";
import "./styled.scss";
import {
  DATA_SELECT_FAKE,
  PRODUCTS_LIST_MOCK,
  PRODUCTS_LIST_MOCK_2,
  PRODUCT_MOCK,
  PRODUCT_MOCK_2,
} from "./constant";

const QuotationFormPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="form-container">
        <div className="content">
          <Row gutter={[14, 14]} className="content-detail">
            <Col span={8}>
              <Flex className="layout-item" vertical>
                <p className="title">Bảng giá niêm yiết</p>
                <Table
                  columns={PRODUCTS_LIST_MOCK_2}
                  dataSource={PRODUCT_MOCK_2}
                />
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

                <Form layout="vertical">
                  <Row gutter={[20, 20]}>
                    <Col span={24}>
                      <Form.Item
                        className="title-label"
                        label="1. Loại nhà thi công"
                      >
                        <Select options={DATA_SELECT_FAKE} />
                      </Form.Item>

                      <Form.Item className="title-label" label="2. Kích thước">
                        <Row gutter={[12, 12]} style={{ marginTop: "1rem" }}>
                          <Col span={12}>
                            <Flex gap="middle">
                              <p style={{ whiteSpace: "nowrap" }}>
                                Chiều dài:{" "}
                              </p>
                              <Input width={"50%"} />
                            </Flex>
                          </Col>
                          <Col span={12}>
                            <Flex gap="middle">
                              <p style={{ whiteSpace: "nowrap" }}>
                                Chiều rộng:{" "}
                              </p>
                              <Input />
                            </Flex>
                          </Col>
                          <Col span={24}>
                            <Flex gap="middle">
                              <p style={{ whiteSpace: "nowrap" }}>
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
                          style={{ marginTop: "1rem" }}
                        >
                          <Flex gap="middle">
                            <p style={{ whiteSpace: "nowrap", width: "40%" }}>
                              Ốp nền:{" "}
                            </p>
                            <Select options={DATA_SELECT_FAKE} />
                            <Input type="number" />
                          </Flex>

                          <Flex gap="middle">
                            <p style={{ whiteSpace: "nowrap", width: "40%" }}>
                              Ốp tường:{" "}
                            </p>
                            <Select options={DATA_SELECT_FAKE} />
                            <Input type="number" />
                          </Flex>

                          <Flex gap="middle">
                            <p style={{ whiteSpace: "nowrap", width: "40%" }}>
                              Trần nhà:{" "}
                            </p>
                            <Select options={DATA_SELECT_FAKE} />
                            <Input type="number" />
                          </Flex>
                        </Flex>
                      </Form.Item>

                      <Form.Item
                        className="title-label"
                        label="4. Phong cách thiết kế"
                      >
                        <Flex
                          gap="middle"
                          vertical
                          style={{ marginTop: "1rem" }}
                        >
                          <Flex gap="middle">
                            <p style={{ whiteSpace: "nowrap", width: "20%" }}>
                              Cố điển{" "}
                            </p>
                            <Checkbox />
                          </Flex>

                          <Flex gap="middle">
                            <p style={{ whiteSpace: "nowrap", width: "20%" }}>
                              Tân cổ điển{" "}
                            </p>
                            <Checkbox />
                          </Flex>

                          <Flex gap="middle">
                            <p style={{ whiteSpace: "nowrap", width: "20%" }}>
                              Nhật bản{" "}
                            </p>
                            <Checkbox />
                          </Flex>

                          <Flex gap="middle">
                            <p style={{ whiteSpace: "nowrap", width: "20%" }}>
                              Ý{" "}
                            </p>
                            <Checkbox />
                          </Flex>
                        </Flex>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Flex>
            </Col>
          </Row>

          <Row>
            <Col span={24} className="total-bill">
              <Flex gap="middle" vertical>
                <p className="price-label">
                  Tổng giá tiền thi công : <span className="price">199$</span>
                </p>

                <p className="price-label">
                  Tổng giá tiền sản phẩm : <span className="price">199$</span>
                </p>
              </Flex>

              <p className="total-price">Thành tiền: 400$</p>

              <Flex gap="middle">
                <Button size="large">Hủy Hóa Đơn</Button>
                <Button type="primary" size="large">
                  Lưu Hóa Đơn
                </Button>
              </Flex>
            </Col>
          </Row>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default QuotationFormPage;
