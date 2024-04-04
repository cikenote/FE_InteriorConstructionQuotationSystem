import { Badge, Descriptions, Image, Modal, Table, Tabs } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";
import { FormatCurrency } from "../../utils/helper";

const ProductColumn = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (name, data) => {
      return <p>{data.productDTO.productName}</p>;
    },
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (price) => FormatCurrency.format(price),
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image, data) => (
      <Image src={data.productDTO.productImage} width={100} height={100} />
    ),
  },
];

const QuotationDetail = ({ quotationDetailProp }, ref) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => setIsOpenModal(true),
    };
  });

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Modal
      title="Quotations Detail"
      open={isOpenModal}
      onCancel={onCloseModal}
      footer={null}
      closeIcon
      width={1000}
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

export default forwardRef(QuotationDetail);
