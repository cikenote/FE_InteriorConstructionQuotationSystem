import { Button, Col, Form, Input, Modal, Row } from "antd";
import axios from "axios";
import PropTypes from "prop-types"; // Import PropTypes
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FORM_RULES } from "../../../utils/constant";

const ArticleModal = forwardRef(({ selectedBlog }, ref) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    openModal: () => {
      setIsOpenModal(true);
    },
  }));

  useEffect(() => {
    if (isOpenModal && selectedBlog) {
      form.setFieldsValue({
        title: selectedBlog.title,
        content: selectedBlog.content,
        img: selectedBlog.image,
      });
    }
  }, [isOpenModal, selectedBlog, form]);

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onFinishForm = async (values) => {
    try {
      // Gửi dữ liệu lên server bằng phương thức PUT
      await axios.put(
        `https://swp391api.developvn.click/api/Articles/${selectedBlog.id}`,
        values
      );
      console.log("Updated blog:", values);
      toast.success("Cập nhật thành công!");
      onCloseModal();
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Cập nhật thất bại. Vui lòng thử lại sau!");
    }
  };

  return (
    <Modal
      title="Edit Article"
      visible={isOpenModal}
      onCancel={onCloseModal}
      footer={null}
    >
      <Form form={form} onFinish={onFinishForm} layout="vertical">
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <Form.Item name="title" label="Title" rules={[FORM_RULES.required]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="content"
              label="Content"
              rules={[FORM_RULES.required]}
            >
              <Input.TextArea rows={3} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="img" label="Image" required={false}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end">
          <Col>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
});

// Add prop types validation
ArticleModal.propTypes = {
  selectedBlog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

// Add display name to the component
ArticleModal.displayName = "ArticleModal";

export default ArticleModal;
