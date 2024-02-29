
import React from "react";
import { useState } from "react";
import { management } from "../../constants/constants";
import BookingManagement from "./booking/BookingManagement";

import SiderMenu from "./components/SiderMenu";
import LocationManagement from "./location/LocationManagement";
import RoomManagement from "./room/RoomManagement";
import UserManagement from "./user/UserManagement";

export default function GeneralManagement() {
  const [selectedMenu, setMenu] = useState(management.user.key);

  const renderMenuContent = () => {
    switch (selectedMenu) {
      case management.user.key:
        return <UserManagement />;
      case management.room.key:
        return <RoomManagement />;
      case management.booking.key:
        return <BookingManagement />;
        case management.location.key:
            return <LocationManagement />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <div className="flex ">
      <div className="mr-3">
        <SiderMenu setMenu={setMenu} />
      </div>

      {renderMenuContent()}
    </div>
  );
}
