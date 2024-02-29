import { Tag } from "antd";
import React from "react";
import {
  labelAirConditioner,
  labelBathRoom,
  labelBedRoom,
  labelKitchen,
  labelLivingRoom,
  labelParkingSlot,
  labelPerMonth,
  labelPool,
  labelServices,
  labelTV,
  labelWashingMachine,
  labelWiFi,
} from "../constants/constants";

export default function RoomInfo({ room }) {
  const renderServiceIcon = (icon, value, title) => {
    if (value) {
      return (
        <Tag color="success" className="my-1">
          {title}
          <i className={icon + " mx-2"}></i>{" "}
          <i className="fa-solid fa-check text-green-500"></i>
        </Tag>
      );
    }
    return (
      <Tag color="error" className="my-1">
        {title} <i className={icon + " mx-2"}></i>
        <i className="fa-solid fa-xmark text-red-500"></i>
      </Tag>
    );
  };

  return (
    <div key={room.id}>
      <div className="text-lg font-bold mb-3">{room.tenPhong}</div>
      <div className="mb-2">
        {labelLivingRoom}: {room.khach} - {labelBedRoom}: {room.phongNgu} -{" "}
        {labelBathRoom}: {room.phongTam}
      </div>
      <div className="mb-5">
        <p>{labelServices}:</p>
        <p>
          {renderServiceIcon(
            "fa-solid fa-soap",
            room.mayGiat,
            labelWashingMachine
          )}
          {renderServiceIcon("fa-solid fa-wifi", room.wifi, labelWiFi)}
          {renderServiceIcon("fa-solid fa-tv", room.tivi, labelTV)}
          {renderServiceIcon(
            "fa-solid fa-wind",
            room.dieuHoa,
            labelAirConditioner
          )}
          {renderServiceIcon("fa-solid fa-kitchen-set", room.bep, labelKitchen)}
          {renderServiceIcon(
            "fa-solid fa-square-parking",
            room.doXe,
            labelParkingSlot
          )}
          {renderServiceIcon(
            "fa-solid fa-person-swimming",
            room.hoBoi,
            labelPool
          )}
        </p>
      </div>
      <div className="font-medium text-md">
        $ {room.giaTien}
        {labelPerMonth}
      </div>
    </div>
  );
}
