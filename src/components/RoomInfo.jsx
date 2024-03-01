
import React from "react";
import {
  labelAirConditioner,
  labelBathRoom,
  labelBedRoom,
  labelKitchen,
  labelLivingRoom,
  labelParkingSlot,
  labelPerNight,
  labelPool,
  labelServices,
  labelTV,
  labelWashingMachine,
  labelWiFi,
} from "../constants/constants";
import { renderServiceIcon } from "../utils/utils";

export default function RoomInfo({ room }) {

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
        {labelPerNight}
      </div>
    </div>
  );
}
