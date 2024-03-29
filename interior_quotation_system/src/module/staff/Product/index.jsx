import React, { useEffect, useRef, useState } from "react";
import TableLayout from "../../../layouts/TableLayout";
import { PRODUCT_COLUMNS } from "./constant";
import ProductModal from "./ProductModal";
import { useMutation } from "@tanstack/react-query";
import ProductAPI from "../../../api/products";
import { Skeleton, message } from "antd";
import "./style.scss";

const StaffProduct = () => {
    const [products, setProducts] = useState([]);

    const {
        isPending: isLoadingProducts,
        mutate: mutateProductsList,
        data: productsData,
    } = useMutation({
        mutationFn: ProductAPI.getAllProductList,
        mutationKey: "products-list",
        onSuccess: (response) => {
            setProducts(response.responses.$values);
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
            onError: () => {
                message.error("Error occur when delete product");
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

    return (
        <div className="product-container">
            <ProductModal ref={productActionModal} />
            <TableLayout
                tableColumns={PRODUCT_COLUMNS}
                tableDataSource={() => products}
                actionName={"New Product"}
                onchangeSearch={searchStaffProduct}
                addNewAction={() => productActionModal.current.openModal()}
                onDeleteQuotation={deleteProduct}
            />
        </div>
    );
};

export default StaffProduct;
