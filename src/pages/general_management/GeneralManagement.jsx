import { Content } from "antd/es/layout/layout";
import React from "react";
import { useState } from "react";
import { roomManagement, userManagement } from "../../constants/constants";
import Layout from "../../template/Layout";
import SiderMenu from "./components/SiderMenu";
import RoomManagement from "./room_management/RoomManagement";
import UserManagement from "./user_management/UserManagement";

export default function GeneralManagement() {
  const [selectedMenu, setMenu] = useState(userManagement.key);

  const renderMenuContent = () => {
    switch (selectedMenu) {
      case userManagement.key:
        return <UserManagement />;
      case roomManagement.key:
        return <RoomManagement />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <div className="flex container">
      <div className="mr-3">
        <SiderMenu setMenu={setMenu} />
      </div>

      {renderMenuContent()}
    </div>
  );
}
