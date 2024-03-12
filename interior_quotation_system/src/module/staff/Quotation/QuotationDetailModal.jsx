import { Col, Form, Grid, Modal } from "antd";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import ProductAPI from "../../../api/products";
import { useMutation } from "@tanstack/react-query";
import { CiStar } from "react-icons/ci";

const QuotationDetailModal = ({}, ref) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [productDetail, setProductDetail] = useState();
  const [productId, setProductId] = useState(15);
  const [form] = Form.useForm();
  const { isPending: productDetailLoading, mutate } = useMutation({
    mutationFn: ProductAPI.getProductDetailById,
    onSuccess: (response) => {
      setProductDetail(response);
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Error occur when get product detail",
      });
    },
  });
  useImperativeHandle(ref, () => {
    return {
      openModal: (id) => {
        setProductId(id);
        setIsOpenModal(true);
      },
    };
  });
  console.log(productDetail);
  useEffect(() => {
    if (productId) {
      mutate(productId);
    }
  }, [productId]);
  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onFinishForm = (values) => {};

  return (
    
    <Modal
      title="Quotation Detail"
      onCancel={onCloseModal}
      closable
      width={800}
      open={isOpenModal}
    >
    {productDetail && (
        <div className="products">
          <div className="product-info">
            <div className="product-data">
              <img
                alt="product-alt"
                src={
                  productDetail.imageUrl
                    ? productDetail.imageUrl
                    : "data:image/png;base64,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"
                }
                className="product-image"
              ></img>
              <div className="product-detail">
                <h3 className="title">{productDetail.name}</h3>
                <div className="rating">
                  <div className="stars">
                    <CiStar className="icon" />
                    <CiStar className="icon" />
                    <CiStar className="icon" />
                    <CiStar className="icon" />
                    <CiStar className="icon" />
                  </div>
                  <div>(25 customer reviews)</div>
                </div>

                <div className="price-data">
                  <div className="price">${productDetail.price}</div>
                  {/* <s>$85.00</s> */}
                </div>

                <div className="desc-product">{productDetail.description}</div>

                {/* <div className="item-list">
                  <div className="item-detail">
                    <div className="dot"></div>
                    <div>
                      Going through the cites of the word in classNameical.
                    </div>
                  </div>
                  <div className="item-detail">
                    <div className="dot"></div>
                    <div>
                      Going through the cites of the word in classNameical.
                    </div>
                  </div>
                  <div className="item-detail">
                    <div className="dot"></div>
                    <div>
                      Going through the cites of the word in classNameical.
                    </div>
                  </div>
                </div> */}

                <div className="item">
                  Categories:{" "}
                  <span className="value">{productDetail.categoryName}</span>
                </div>

                <div className="item">
                  Tags <span className="value">Kithen, Basement, Bathroom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default forwardRef(QuotationDetailModal);
