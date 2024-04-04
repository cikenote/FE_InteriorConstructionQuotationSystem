import {
  Modal,
  Form,
  Row,
  Col,
  Input,
  message,
  Skeleton,
  Select,
  Flex,
  Button,
} from "antd";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { FORM_RULES } from "../../../utils/constant";
import { useMutation, useQuery } from "@tanstack/react-query";
import ProductAPI from "../../../api/products";
import CategoryAPI from "../../../api/categories";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const ProductModal = ({ productUpdate, afterCloseModal }, ref) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [categoriesSelect, setCategoriesSelect] = useState([]);
  const userProfile = useSelector(
    (selector) => selector.userProfileReducer.profileData
  );

  const [form] = Form.useForm();
  const {
    isPending: isLoadingCreateNewProduct,
    mutate: mutateCreateNewProduct,
  } = useMutation({
    mutationFn: ProductAPI.CreateNewProduct,
    mutationKey: "product-key",
    onError: (error) => {
      message.error(error.message);
    },
    onSuccess: () => {
      message.success("Create new product is successfully");
      afterCloseModal();
      onCloseModal();
      form.resetFields();
    },
  });

  const {
    isPending: isLoadingCategoriesList,
    isSuccess: isSuccessGetCategories,
    data: categories,
    error: categoriesError,
  } = useQuery({
    queryKey: ["categories-list"],
    queryFn: CategoryAPI.GetCategories,
  });

  useImperativeHandle(ref, () => {
    return {
      openModal: () => setIsOpenModal(true),
    };
  });

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onFinishForm = (values) => {
    mutateCreateNewProduct({
      ...values,
      userId: userProfile.userId,
      status: true,
      createdAt: dayjs().format(),
    });
  };

  if (categoriesError) {
    message.error("Error occur when get categories");
  }

  useEffect(() => {
    if (categories && isSuccessGetCategories) {
      const convertCategoriesSelect = categories.$values.map((category) => {
        return {
          label: category.name,
          value: category.id,
        };
      });
      setCategoriesSelect(convertCategoriesSelect);
    }
  }, [categories]);

  return (
    <Modal
      title={productUpdate ? "Update Product" : "New Product"}
      open={isOpenModal}
      onCancel={onCloseModal}
      footer
    >
      <Skeleton loading={isLoadingCategoriesList || isLoadingCreateNewProduct}>
        <Form form={form} onFinish={onFinishForm} layout="vertical">
          <Row gutter={[10, 10]}>
            <Col span={24}>
              <Form.Item
                name="categoryId"
                label="Category"
                rules={[FORM_RULES.required]}
              >
                <Select options={categoriesSelect} />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="name" label="Name" rules={[FORM_RULES.required]}>
                <Input />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name="price"
                label="Price"
                rules={[FORM_RULES.required]}
              >
                <Input type="number" min={0} />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="size" label="Size" rules={[FORM_RULES.required]}>
                <Input />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                required={false}
              >
                <Input.TextArea rows={3} />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="image" label="Image" required={false}>
                <Input />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Flex justify="end" align="center" gap="middle">
                <Button onClick={onCloseModal}>Cancel</Button>
                <Button htmlType="submit" type="primary">
                  Confirm
                </Button>
              </Flex>
            </Col>
          </Row>
        </Form>
      </Skeleton>
    </Modal>
  );
};

export default forwardRef(ProductModal);
