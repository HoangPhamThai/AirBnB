import { Divider, Image } from "antd";
import React from "react";
import RoomInfo from "../../../components/RoomInfo";

export default function RentedRoom({ roomInfo }) {

  
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image src={roomInfo.hinhAnh} alt="" className="rounded-xl" />
        </div>
        <div>
          <RoomInfo room={roomInfo} />
        </div>
      </div>
      <Divider />
    </div>
  );
}
