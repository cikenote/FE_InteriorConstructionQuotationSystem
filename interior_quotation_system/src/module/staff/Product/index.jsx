import React, { useEffect, useRef, useState } from "react";
import TableLayout from "../../../layouts/TableLayout";
import ProductModal from "./ProductModal";
import { PRODUCT_COLUMNS } from "./constant";
import "./style.scss";
import { useMutation } from "@tanstack/react-query";
import ProductAPI from "../../../api/products";
import { Skeleton } from "antd";

const StaffProduct = () => {
  const [products, setProducts] = useState([]);
  const [productUpdate, setProductUpdate] = useState();

  const {
    isPending: isLoadingProducts,
    mutate: mutateProductsList,
    data: productsData,
  } = useMutation({
    mutationFn: ProductAPI.getAllProductList,
    mutationKey: "products-list",
    onSuccess: (response) => {
      setProducts(response.$values);
    },
    onError: (errors) => {
      console.log(errors);
    },
  });

  const { isPending: isLoadingDeleteProduct, mutate: mutateDeleteProduct } =
    useMutation({
      mutationFn: ProductAPI.DeleteProduct,
      mutationKey: "Delete-product",
      onSuccess: () => {
        message.success("Delete product is successful");
        mutateProductsList();
      },
      onError: (errorResponse) => {
        console.log(errorResponse);
        message.error(errorResponse.response.data.message);
      },
    });

  const productActionModal = useRef();
  const searchStaffProduct = (event) => {
    const keyword = event.target.value.toLowerCase();
    if (productsData) {
      const result = productsData.responses.$values.filter((product) =>
        product.name.toLowerCase().includes(keyword)
      );
      setProducts(result);
    }
  };

  useEffect(() => {
    mutateProductsList();
  }, []);

  const deleteProduct = (id) => {
    mutateDeleteProduct(id);
  };

  if (isLoadingProducts || isLoadingDeleteProduct) {
    return <Skeleton paragraph={{ rows: 5 }} />;
  }

  const onUpdateProduct = () => {};

  return (
    <div className="product-container">
      <ProductModal
        ref={productActionModal}
        afterCloseModal={() => mutateProductsList()}
      />
      <TableLayout
        tableColumns={PRODUCT_COLUMNS}
        tableDataSource={() => products}
        actionName={"New Product"}
        onchangeSearch={searchStaffProduct}
        addNewAction={() => productActionModal.current.openModal()}
        onDeleteQuotation={deleteProduct}
        onEditQuotation={onUpdateProduct}
      />
    </div>
  );
};

export default StaffProduct;
