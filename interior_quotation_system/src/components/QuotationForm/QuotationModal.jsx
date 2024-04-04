import {
    Button,
    Col,
    Flex,
    Form,
    Input,
    Modal,
    Row,
    Select,
    message,
} from "antd";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { FORM_RULES } from "../../utils/constant";
import { useMutation } from "@tanstack/react-query";
import QuotationAPI from "../../api/quotation";

const QuotationModal = ({ AfterCloseModal, QuotationId }, ref) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [productId, setProductId] = useState(15);
    const [isOpenModal, setIsOpenModal] = useState(false);
    useImperativeHandle(ref, () => {
        return {
            openModal: (id) => {
                setProductId(id);
                setIsOpenModal(true);
            },
        };
    });

    const { mutate, isPending: updateQuotationLoading } = useMutation({
        mutationFn: QuotationAPI.UpdateQuotation,
        mutationKey: "update-quotation",
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Update quotation is successfully",
            });
            onCloseModal();
            AfterCloseModal();
        },
    });

    const onCloseModal = () => {
        setIsOpenModal(false);
    };

    const onSubmitForm = (response) => {
        mutate({
            quotationId: QuotationId,
            quotationStatus: response.quotationStatus,
        });
    };

    return (
        <Modal
            open={isOpenModal}
            onCancel={onCloseModal}
            title="Update Quotation"
            closeIcon={false}
            footer
        >
            {contextHolder}
            <Form layout="vertical" onFinish={onSubmitForm}>
                <Row gutter={[10, 10]}>
                    <Col span={24}>
                        <Form.Item
                            label="Status"
                            name="quotationStatus"
                            rules={[FORM_RULES.required]}
                        >
                            <Select
                                options={[
                                    { label: "Pending", value: "Pending" },
                                    { label: "Done", value: "Done" },
                                    { label: "Cancel", value: "Cancel" },
                                ]}
                            ></Select>
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Flex justify="end" gap={4}>
                            <Button onClick={onCloseModal}>Cancel</Button>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={updateQuotationLoading}
                            >
                                Update
                            </Button>
                        </Flex>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

export default forwardRef(QuotationModal);
