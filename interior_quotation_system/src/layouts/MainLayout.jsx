import { Avatar, Dropdown, Layout, Menu } from "antd";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import { avatarItems } from "./constant";
import "./style.scss";

const { Header, Sider, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  // backgroundColor: "#0958d9",
};

const MainLayout = ({ menuItems }) => {
  return (
    <Layout className="layout">
      <Sider trigger={null} width={"20%"} className="sidebar">
        <div className="logo">
          <Avatar
            size={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 64,
              xl: 80,
              xxl: 100,
            }}
            alt="logo-alt"
            src="/images/logo.png"
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[menuItems[0].key]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header className="header-style">
          <CiSearch size={35} style={{ cursor: "pointer" }} />
          <Dropdown
            menu={{
              items: avatarItems,
            }}
          >
            <Avatar
              src="https://res.cloudinary.com/dnzzvunuu/image/upload/v1709009270/MacchiatoAvatar_ahymfl.webp"
              size={40}
              style={{ cursor: "pointer" }}
            />
          </Dropdown>
          <IoSettingsOutline size={30} style={{ cursor: "pointer" }} />
        </Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
