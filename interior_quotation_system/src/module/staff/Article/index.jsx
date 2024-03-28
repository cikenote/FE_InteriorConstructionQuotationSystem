import React, { useRef } from "react";
import TableLayout from "../../../layouts/TableLayout";
import { ARTICLE_COLUMNS, ARTICLE_DATA_SOURCE } from "./constant";
import ArticleModal from "./ArticleModal";

const StaffArticle = () => {
  const articleActionModal = useRef();

  const searchStaffArticle = (event) => {};

  return (
    <>
      <ArticleModal ref={articleActionModal} />

      <TableLayout
        tableColumns={ARTICLE_COLUMNS}
        tableDataSource={ARTICLE_DATA_SOURCE}
        actionName={"New article"}
        onchangeSearch={searchStaffArticle}
        addNewAction={() => articleActionModal.current.openModal()}
      />
    </>
  );
};

export default StaffArticle;
