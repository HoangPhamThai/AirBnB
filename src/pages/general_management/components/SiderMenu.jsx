import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { roomManagement, userManagement } from "../../../constants/constants";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";

export default function SiderMenu({ setMenu }) {
  
  return (
    <div>
      <Sider width={200}>
        <Menu mode="inline" defaultSelectedKeys={[userManagement.key]}>
          <Menu.Item
            key={userManagement.key}
            onClick={() => {
              setMenu(userManagement.key);
            }}
            icon={<UserOutlined />}
          >
            {userManagement.value}
          </Menu.Item>
          <Menu.Item
            key={roomManagement.key}
            onClick={() => {
              setMenu(roomManagement.key);
            }}
            icon={<HomeOutlined />}
          >
            {roomManagement.value}
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
}
