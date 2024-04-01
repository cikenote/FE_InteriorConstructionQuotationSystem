import { Modal, Form, Row, Col, Input, Button } from "antd";
import { forwardRef, useImperativeHandle, useState, useEffect } from "react";
import axios from "axios";
import { FORM_RULES } from "../../../utils/constant";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        img: selectedBlog.image
      });
    }
  }, [isOpenModal, selectedBlog, form]);

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onFinishForm = async (values) => {
    try {
      // Gửi dữ liệu lên server bằng phương thức PUT
      await axios.put(`https://swp391api.developvn.click/api/Articles/${selectedBlog.id}`, values);
      console.log("Updated blog:", values);
      toast.success('Cập nhật thành công!');
      onCloseModal();
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error('Cập nhật thất bại. Vui lòng thử lại sau!');
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
            <Form.Item name="content" label="Content" rules={[FORM_RULES.required]}>
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

export default ArticleModal;
