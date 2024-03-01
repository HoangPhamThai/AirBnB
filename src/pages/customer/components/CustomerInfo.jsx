import { Avatar } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { labelEmail, labelConfirmedEmail } from "../../../constants/constants";
import ListRentedRoom from "./ListRentedRoom";
import { useSelector } from "react-redux";

export default function CustomerInfo() {
  const userInfo = useSelector((state) => state.userSlice.user);

  const renderUserInfo = () => {
    if (userInfo) {
      return (
        <div>
          <h1 className="my-3 text-lg">{userInfo.user.name}</h1>
          
          <p>{labelEmail}: {userInfo.user.email}</p>
        </div>
      );
    }
  };

  return (
    <div className="flex mt-3">
      <div className="text-center w-1/5">
        <div>
          <Avatar size={100} icon={<UserOutlined />} />
          <p className="text-sm text-gray-400 mt-1"><i className="fa-solid fa-shield-halved mr-2"></i>{labelConfirmedEmail}</p>
        </div>
        {renderUserInfo()}
      </div>
      <div className="w-3/4">
        <ListRentedRoom />
      </div>
    </div>
  );
}
