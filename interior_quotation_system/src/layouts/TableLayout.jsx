import React from "react";
import "./style.scss";
import { Button, Card, Input, Table } from "antd";
import { AddOutlined } from "@mui/icons-material";
import { debounce } from "@mui/material";

const TableLayout = ({
  tableColumns,
  tableDataSource,
  onchangeSearch,
  addNewAction,
  actionName,
  viewProductDetail,
  onEditQuotation,
  onDeleteQuotation,
  sendContract,
}) => {
  return (
    <div className="table-container">
      <Card size="small">
        <div className="table-filter">
          <Input.Search
            placeholder="Search..."
            className="input-search"
            onChange={debounce(onchangeSearch, 500)}
          />
          <Button type="primary" icon={<AddOutlined />} onClick={addNewAction}>
            {actionName}
          </Button>
        </div>
      </Card>

      <Card size="small">
        <Table
          columns={tableColumns({
            viewProductDetail,
            onEditQuotation,
            onDeleteQuotation,
            sendContract,
          })}
          dataSource={tableDataSource()}
        />
      </Card>
    </div>
  );
};

export default TableLayout;
