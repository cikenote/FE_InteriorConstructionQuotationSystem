import { Badge, Col, Descriptions, Form, Grid, Modal, Table, Tabs } from "antd";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import ProductAPI from "../../../api/products";
import { useMutation } from "@tanstack/react-query";
import { CiStar } from "react-icons/ci";
import { FormatCurrency } from "../../../utils/helper";
import { ProductColumn } from "../../../components/Header/QuotationDetail";

const QuotationDetailModal = ({ quotationDetailProp }, ref) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: (id) => {
        setIsOpenModal(true);
      },
    };
  });

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Modal
      title="Quotation Detail"
      onCancel={onCloseModal}
      closable
      width={1200}
      open={isOpenModal}
      footer={null}
    >
      {quotationDetailProp && (
        <Tabs
          items={[
            {
              key: "Quotation",
              label: "Information",
              children: (
                <Descriptions
                  bordered
                  items={[
                    {
                      key: "total-bill",
                      label: "Total Bill",
                      children: FormatCurrency.format(
                        quotationDetailProp.totalBill
                      ),
                    },
                    {
                      key: "total-bill",
                      label: "Total Construction",
                      children: FormatCurrency.format(
                        quotationDetailProp.totalConstructionCost
                      ),
                    },
                    {
                      key: "total-bill",
                      label: "Total Product Cost",
                      children: FormatCurrency.format(
                        quotationDetailProp.totalProductCost
                      ),
                    },

                    {
                      key: "total-bill",
                      label: "Floor Construct",
                      children: (
                        <p>{quotationDetailProp.floorConstruction.name}</p>
                      ),
                      span: 2,
                    },
                    {
                      key: "status",
                      label: "Status",
                      children: (
                        <Badge
                          status="processing"
                          text={quotationDetailProp.quotationStatus}
                        ></Badge>
                      ),
                      span: 2,
                    },
                    {
                      key: "total-bill",
                      label: "Ceiling Construct",
                      children: (
                        <p>{quotationDetailProp.ceilingConstruct.name}</p>
                      ),
                      span: 3,
                    },
                    {
                      key: "total-bill",
                      label: "Home Style",
                      children: <p>{quotationDetailProp.homeStyle.name}</p>,
                      span: 3,
                    },
                    {
                      key: "total-bill",
                      label: "Style",
                      children: <p>{quotationDetailProp.styleDTO.name}</p>,
                      span: 3,
                    },
                  ]}
                />
              ),
            },
            {
              key: "Product",
              label: "Product",
              children: (
                <Table
                  columns={ProductColumn}
                  dataSource={quotationDetailProp.quotationDetailDTOs.$values}
                />
              ),
            },
          ]}
        />
      )}
    </Modal>
  );
};

export default forwardRef(QuotationDetailModal);
