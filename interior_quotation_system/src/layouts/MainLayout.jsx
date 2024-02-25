import React from "react";
import { Layout, Menu } from "antd";
import "./style.scss";
import { Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const MainLayout = ({ menuItems }) => {
  return (
    <Layout className="layout">
      <Sider trigger={null} width={"20%"} className="sidebar">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[menuItems[0].key]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header className="header-style">Header</Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
