import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { management } from "../../../constants/constants";
import { UserOutlined, HomeOutlined, EnvironmentOutlined, CheckCircleOutlined } from "@ant-design/icons";

export default function SiderMenu({ setMenu }) {
  return (
    <div>
      <Sider width={200}>
        <Menu mode="inline" defaultSelectedKeys={[management.user.key]}>
          {/* user */}
          <Menu.Item
            key={management.user.key}
            onClick={() => {
              setMenu(management.user.key);
            }}
            icon={<UserOutlined />}
          >
            {management.user.value}
          </Menu.Item>
          {/* booking */}
          <Menu.Item
            key={management.booking.key}
            onClick={() => {
              setMenu(management.booking.key);
            }}
            icon={<CheckCircleOutlined />}
          >
            {management.booking.value}
          </Menu.Item>
          {/* location */}
          <Menu.Item
            key={management.location.key}
            onClick={() => {
              setMenu(management.location.key);
            }}
            icon={<EnvironmentOutlined />}
          >
            {management.location.value}
          </Menu.Item>
          {/* room */}
          <Menu.Item
            key={management.room.key}
            onClick={() => {
              setMenu(management.room.key);
            }}
            icon={<HomeOutlined />}
          >
            {management.room.value}
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
}
