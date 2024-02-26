import React from "react";
import { Avatar, Dropdown, Image, Layout, Menu } from "antd";
import "./style.scss";
import { Link, Outlet } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { avatarItems } from "./constant";

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
        <div className="logo">
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            alt="logo-alt"
            src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TG9nb3xlbnwwfHwwfHx8MA%3D%3D"
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
          <CiSearch size={30} style={{ cursor: "pointer" }} />
          <Dropdown
            menu={{
              items: avatarItems,
            }}
          >
            <Avatar
              src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
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
