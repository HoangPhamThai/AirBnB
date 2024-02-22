import { Col, Divider, Row } from "antd";
import React from "react";
import {
  labelAirConditioner,
  labelBathRoom,
  labelBedRoom,
  labelIron,
  labelKitchen,
  labelLivingRoom,
  labelParkingSlot,
  labelPerMonth,
  labelPool,
  labelTV,
  labelWashingMachine,
  labelWiFi,
} from "../../../constants/constants";

export default function RentedRoom({ roomInfo }) {
  const renderRoomDetails = () => {
    return (
      <div key={roomInfo.id}>
        <div className="mb-2">
          {labelLivingRoom}: {roomInfo.khach} - {labelBedRoom}:{" "}
          {roomInfo.phongNgu} - {labelBathRoom}: {roomInfo.phongTam}
        </div>
        <div className="mb-5">
          {roomInfo.mayGiat && `${labelWashingMachine}`}
          {roomInfo.banLa && ` - ${labelIron}`}
          {roomInfo.tivi && ` - ${labelTV}`}
          {roomInfo.dieuHoa && ` - ${labelAirConditioner}`}
          {roomInfo.wifi && ` - ${labelWiFi}`}
          {roomInfo.bep && ` - ${labelKitchen}`}
          {roomInfo.doXe && ` - ${labelParkingSlot}`}
          {roomInfo.hoBoi && ` - ${labelPool}`}
        </div>
        <div className="text-right font-medium text-md">
          $ {roomInfo.giaTien}
          {labelPerMonth}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img src={roomInfo.hinhAnh} alt="" className="object-contain" />
        </div>
        <div>
          <div className="text-md font-bold mb-3">{roomInfo.tenPhong}</div>
          <div>{renderRoomDetails()}</div>
        </div>
      </div>
      <Divider />
    </div>
  );
}
