import React, { useRef } from "react";
import TableLayout from "../../../layouts/TableLayout";
import { ARTICLE_COLUMNS, ARTICLE_DATA_SOURCE } from "./constant";
import ArticleModal from "./ArticleModal";
import Table from 'react-bootstrap/Table';

const StaffArticle = () => {
  const articleActionModal = useRef();

  const searchStaffArticle = (event) => { };

  return (
    <>
      <ArticleModal ref={articleActionModal} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>3</td>
            <td>@fat</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>

    </>
  );
};

export default StaffArticle;
