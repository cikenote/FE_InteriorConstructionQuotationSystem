import { Button, Col, Flex, Form, Row, Select, Table, Typography } from "antd";
import React from "react";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import { PRODUCTS_LIST_MOCK } from "./constant";

const QuotationFormPage = () => {
  const formik = useFormik({
    initialValues: {
      styleId: 1,
      witdh: 0,
      height: 0,
      length: 0,
      totalConstructionCost: 0,
      totalProductCost: 0,
      homeStyleId: "",
      floorConstructionId: "",
      wallConstructId: "",
      ceilingConstructId: "",
      quotationDetailDTOs: [],
    },
    enableReinitialize: true,
    validationSchema: schema,
    onSubmit: (values) => {
      mutateQuotationForm(values);
    },
  });

  const homeParameterRef = useRef();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    mutateProductsList();
  }, []);

  useEffect(() => {
    calculateTotalProductPrice();
    onCalculateHomeStyle();
  }, [formik.values]);

  const { isPending: isProductStyleLoading, data: productStyles } = useQuery({
    queryFn: ProductAPI.getListStyle,
    queryKey: ["product-style-list"],
  });

  const { isPending: isHomeStyleLoading, data: homeStyles } = useQuery({
    queryFn: ProductAPI.getListHomeStyle,
    queryKey: ["home-style-list"],
  });

  const { isPending: isProductLoading, mutate: mutateProductsList } =
    useMutation({
      mutationFn: ProductAPI.getAllProductList,
      mutationKey: "products-list",
      onError: () => {
        message.error("Error occur when get all products");
      },
      onSuccess: (res) => {
        const result = res.responses.$values.map((product) => {
          return {
            name: product.name,
            image: product.imageUrl,
            price: product.price,
            action: product.productId,
          };
        });

        setProducts(result);
      },
    });

  const { isPending: isLoadingSubmitQuotation, mutate: mutateQuotationForm } =
    useMutation({
      mutationFn: QuotationAPI.SubmitQuotation,
      mutationKey: "submit-quotation",
      onSuccess: () => {
        message.success("Lưu hóa đơn thành công");
        navigate(PAGE_ROUTES.HOME);
      },
      onError: (error) => {
        message.error(error);
      },
    });

  const onCallBackSelectedProduct = (product) => {
    const productIndex = formik.values.quotationDetailDTOs.findIndex(
      (productItem) => productItem.productId === product.action
    );

    if (productIndex > -1) {
      const result = formik.values.quotationDetailDTOs.filter(
        (item) => item.productId !== product.action
      );

      formik.setFieldValue("quotationDetailDTOs", result);
    } else {
      const newProductsList = [
        ...formik.values.quotationDetailDTOs,
        {
          productId: product.action,
          quantity: 1,
          price: product.price,
        },
      ];

      formik.setFieldValue("quotationDetailDTOs", newProductsList);
    }
  };

  const calculateTotalProductPrice = () => {
    const result = formik.values.quotationDetailDTOs.reduce(
      (acc, current) => acc + current.price,
      0
    );
    formik.setFieldValue("totalProductCost", result * 1000);
  };

  const onCalculateHomeStyle = () => {
    const totalHomePrice = getHomePrice();
    const totalStylePrice = getStylePrice();
    const totalWallPrice = getWallConstructionStyle();
    const totalFloorPrice = getFloorConstructionStyle();
    const totalCeilPrice = getCeilStyle();

    formik.setFieldValue(
      "totalConstructionCost",
      totalHomePrice +
        totalStylePrice +
        totalWallPrice +
        totalFloorPrice +
        totalCeilPrice
    );
  };

  const getHomePrice = () => {
    const areaSquare = formik.values.witdh * formik.values.length;
    if (formik.values.homeStyleId) {
      switch (formik.values.homeStyleId) {
        case 1: {
          return areaSquare * 350000;
        }

        case 2: {
          return areaSquare * 220000;
        }

        case 3: {
          return areaSquare * 220000;
        }

        case 4: {
          return areaSquare * 200000;
        }
      }
    }

    return 0;
  };

  const getStylePrice = () => {
    const areaSquare = formik.values.witdh * formik.values.length;
    if (formik.values.styleId) {
      switch (formik.values.styleId) {
        case 1: {
          return areaSquare * 200000;
        }

        case 2: {
          return areaSquare * 220000;
        }

        case 3: {
          return areaSquare * 220000;
        }

        case 4: {
          return areaSquare * 350000;
        }
      }
    }

    return 0;
  };

  const getWallConstructionStyle = () => {
    const heightSQuare = formik.values.height * formik.values.length;

    switch (formik.values.wallConstructId) {
      case 3: {
        return heightSQuare * 150000;
      }

      case 4: {
        return heightSQuare * 250000;
      }
    }

    return 0;
  };

  const getFloorConstructionStyle = () => {
    const areaSquare = formik.values.witdh * formik.values.length;

    if (formik.values.floorConstructionId) {
      switch (formik.values.floorConstructionId) {
        case 1: {
          return areaSquare * 200000;
        }

        case 2: {
          return areaSquare * 350000;
        }
      }
    }

    return 0;
  };

  const getCeilStyle = () => {
    const areaSquare = formik.values.witdh * formik.values.length;

    if (formik.values.ceilingConstructId) {
      switch (formik.values.ceilingConstructId) {
        case 5: {
          return areaSquare * 100000;
        }

        case 6: {
          return areaSquare * 200000;
        }
      }
    }

    return 0;
  };
  if (isHomeStyleLoading || isProductStyleLoading || isProductLoading) {
    return <Skeleton avatar paragraph={{ rows: 4 }} />;
  }

  return (
    <>
      <div>
        <HomeParameterModal
          ref={homeParameterRef}
          CallBackParameter={(values) => {
            formik.setValues({
              ...formik.values,
              ...values,
            });
          }}
        />
        <Navbar></Navbar>
        <form onSubmit={formik.handleSubmit} className="form-container">
          <div className="content">
            <h3>Bảng Báo Giá</h3>
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
                  <Table
                    columns={PRODUCTS_LIST_MOCK({
                      onSelectedProduct: onCallBackSelectedProduct,
                    })}
                    dataSource={products}
                  />
                </Flex>
              </Col>
              <Col span={8}>
                <Flex className="layout-item" vertical>
                  <p className="title">Bảng giá dự tính</p>

                  {!formik.values.witdh && (
                    <div
                      className="home-content"
                      onClick={() => homeParameterRef.current.openModal()}
                    >
                      <Button
                        type="primary"
                        size="large"
                        style={{ width: "100%" }}
                      >
                        Nhập số liệu{" "}
                      </Button>
                    </div>
                  )}

                  {formik.values.witdh && (
                    <>
                      <Card>
                        <Flex vertical gap="middle">
                          <Descriptions
                            layout="vertical"
                            bordered
                            items={[
                              {
                                key: "width",
                                label: "Width",
                                children: formik.values.witdh,
                              },
                              {
                                key: "height",
                                label: "Height",
                                children: formik.values.height,
                              },
                              {
                                key: "length",
                                label: "Length",
                                children: formik.values.length,
                              },
                            ]}
                          />

                          <Button
                            style={{ width: "100%" }}
                            type="primary"
                            onClick={() => homeParameterRef.current.openModal()}
                          >
                            Edit Parameter
                          </Button>
                        </Flex>
                      </Card>

                      <Card>
                        <Form layout="vertical">
                          <Row gutter={[20, 20]}>
                            <Col span={24}>
                              <Form.Item
                                className="title-label"
                                label="1. Loại nhà thi công"
                              >
                                <Select
                                  name="homeStyleId"
                                  onChange={(value) => {
                                    formik.setFieldValue("homeStyleId", value);
                                  }}
                                >
                                  {homeStyles.$values.map((style) => (
                                    <Select.Option
                                      value={style.id}
                                      key={style.id}
                                    >
                                      {style.name}
                                    </Select.Option>
                                  ))}
                                </Select>
                                {formik.errors && (
                                  <div className="error-msg">
                                    {formik.errors.homeStyleId}
                                  </div>
                                )}
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
                                    <Select
                                      name="floorConstructionId"
                                      options={FLOOR_DATA}
                                      onChange={(value) =>
                                        formik.setFieldValue(
                                          "floorConstructionId",
                                          value
                                        )
                                      }
                                    />

                                    {formik.errors && (
                                      <div className="error-msg">
                                        {formik.errors.floorConstructionId}
                                      </div>
                                    )}
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
                                    <Select
                                      name="wallConstructId"
                                      options={WALL_DATA}
                                      onChange={(value) =>
                                        formik.setFieldValue(
                                          "wallConstructId",
                                          value
                                        )
                                      }
                                    />

                                    {formik.errors && (
                                      <p className="error-msg">
                                        {formik.errors.wallConstructId}
                                      </p>
                                    )}
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
                                    <Select
                                      name="ceilingConstructId"
                                      options={CEIL_DATA}
                                      onChange={(value) =>
                                        formik.setFieldValue(
                                          "ceilingConstructId",
                                          value
                                        )
                                      }
                                    />

                                    {formik.errors && (
                                      <p className="error-msg">
                                        {formik.errors.ceilingConstructId}
                                      </p>
                                    )}
                                  </Flex>
                                </Flex>
                              </Form.Item>
                              <Form.Item
                                className="title-label"
                                label="4. Phong cách thiết kế"
                              >
                                <Radio.Group
                                  defaultValue={1}
                                  onChange={(value) =>
                                    formik.setFieldValue(
                                      "styleId",
                                      value.target.value
                                    )
                                  }
                                >
                                  {productStyles.$values.map((item) => {
                                    return (
                                      <Radio value={item.id} key={item.id}>
                                        {item.name}
                                      </Radio>
                                    );
                                  })}
                                </Radio.Group>
                              </Form.Item>
                            </Col>
                          </Row>
                        </Form>
                      </Card>
                    </>
                  )}
                </Flex>
              </Col>
            </Row>

            <Row>
              <Col span={24} className="total-bill">
                <Flex gap="middle" vertical>
                  <p className="price-label">
                    Tổng giá tiền thi công :{" "}
                    <span className="price">
                      {FormatCurrency.format(
                        formik.values.totalConstructionCost
                      )}{" "}
                    </span>
                  </p>

                  <p className="price-label">
                    Tổng giá tiền sản phẩm :{" "}
                    <span className="price">
                      {FormatCurrency.format(formik.values.totalProductCost)}
                    </span>
                  </p>
                </Flex>

                <p className="total-price">
                  Thành tiền:
                  {FormatCurrency.format(
                    formik.values.totalConstructionCost +
                      formik.values.totalProductCost
                  )}{" "}
                </p>

                <Flex gap="middle">
                  <Button
                    htmlType="submit"
                    type="primary"
                    size="large"
                    loading={isLoadingSubmitQuotation}
                  >
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
        </form>
      </div>
      <Footer />
    </>
  );
};

export default QuotationFormPage;
