import { Divider } from "antd";
import React from "react";
import RoomInfo from "../../../components/RoomInfo";

export default function RentedRoom({ roomInfo }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img src={roomInfo.hinhAnh} alt="" className="object-contain" />
        </div>
        <div>
          <RoomInfo roomInfo={roomInfo} />
        </div>
      </div>
      <Divider />
    </div>
  );
}
