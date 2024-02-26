import { useRef } from "react";
import QuouTationModal from "./QuouTationModal";
import { QUOTATION_COLUMNS, QUOTATION_DATA_SOURCE } from "./constant";
import TableLayout from "../../../layouts/TableLayout";
import ProductDetailModal from "./ProductDetailModal";

const StaffQuotation = () => {
  const quotationModal = useRef();
  const productDetailModal = useRef();

  const searchStaffQuotation = (event) => {};

  return (
    <>
      <QuouTationModal ref={quotationModal} />
      <ProductDetailModal ref={productDetailModal} />

      <TableLayout
        tableColumns={QUOTATION_COLUMNS}
        tableDataSource={QUOTATION_DATA_SOURCE}
        actionName={"New Quotation"}
        onchangeSearch={searchStaffQuotation}
        addNewAction={() => quotationModal.current.openModal()}
      />
    </>
  );
};

export default StaffQuotation;
