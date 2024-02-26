import React from "react";
import {
    labelAdditionalSerives,
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
} from "../constants/constants";

export default function RoomInfo({roomInfo}) {
  return (
    <div key={roomInfo.id}>
        <div className="text-lg font-bold mb-3">{roomInfo.tenPhong}</div>
      <div className="mb-2">
        {labelLivingRoom}: {roomInfo.khach} - {labelBedRoom}:{" "}
        {roomInfo.phongNgu} - {labelBathRoom}: {roomInfo.phongTam}
      </div>
      <div className="mb-5">
        {`${labelAdditionalSerives}: `}
        {roomInfo.mayGiat && `${labelWashingMachine}`}
        {roomInfo.banLa && ` - ${labelIron}`}
        {roomInfo.tivi && ` - ${labelTV}`}
        {roomInfo.dieuHoa && ` - ${labelAirConditioner}`}
        {roomInfo.wifi && ` - ${labelWiFi}`}
        {roomInfo.bep && ` - ${labelKitchen}`}
        {roomInfo.doXe && ` - ${labelParkingSlot}`}
        {roomInfo.hoBoi && ` - ${labelPool}`}
      </div>
      <div className="font-medium text-md">
        $ {roomInfo.giaTien}
        {labelPerMonth}
      </div>
    </div>
  );
}
