import { Modal, Form, Row, Col, Input, DatePicker, message, Select } from "antd";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { FORM_RULES } from "../../../utils/constant";
import { useMutation, useQuery } from "@tanstack/react-query";
import ProductAPI from "../../../api/products";
import CategoryAPI from "../../../api/catagories";

const ProductModal = ({ productUpdate }, ref) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [categorySelect, setCategorySelect] = useState([]);

  const [form] = Form.useForm();
  const { isPending: isLoadingCreateNewProduct, mutate: mutateCreateNewProduct } = useMutation({
    mutationFn: ProductAPI.CreateNewProduct,
    mutationKey: "product-key",
    onError: (error) => {
      message.error(error);
    },
    onSuccess: () => {
      message.success("Create new product is successfully");
      onCloseModal();
      form.resetFields();
    },
  });

  const { isPending, isError, data, error, isSuccess } = useQuery({
    queryFn: CategoryAPI.getcategorylist,
    queryKey: ["qweqwe"],
    enabled: false,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (isSuccess && data) {
    const result = data.$values.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });

    setCategorySelect(result);
  }

  useImperativeHandle(ref, () => {
    return {
      openModal: () => setIsOpenModal(true),
    };
  });

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onFinishForm = (values) => {
    console.log(values);
  };

  return (
    <Modal title={productUpdate ? "Update Product" : "New Product"} open={isOpenModal} onCancel={onCloseModal}>
      <Form form={form} onFinish={onFinishForm} layout="vertical">
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <Form.Item name="categoryId" label="Category" rules={[FORM_RULES.required]}>
              <Select options={categorySelect} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="name" label="Name" rules={[FORM_RULES.required]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="price" label="Price" rules={[FORM_RULES.required]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="createAt" label="Create at" rules={[FORM_RULES.required]}>
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="updateAt" label="Update at" rules={[FORM_RULES.required]}>
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="description" label="Description" required={false}>
              <Input.TextArea rows={3} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="image" label="Image" required={false}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default forwardRef(ProductModal);
