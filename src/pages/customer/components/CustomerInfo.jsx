import { Avatar, Button } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { labelUpdateAvatar } from "../../../constants/constants";
import ListRentedRoom from "./ListRentedRoom";

export default function CustomerInfo() {
  return (
    <div className="grid grid-cols-3">
      <div className="">
        <Avatar size={100} icon={<UserOutlined />} />
        <Button type="link">{labelUpdateAvatar}</Button>
      </div>
      <div className="col-span-2">
        <ListRentedRoom />
      </div>
    </div>
  );
}
