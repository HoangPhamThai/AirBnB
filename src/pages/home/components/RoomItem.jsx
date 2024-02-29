import React from "react";
import { labelPerMonth, labelRoom } from "../../../constants/constants";

export default function RoomItem({ room }) {
  const renderRoomIcon = (icon, value) => {
    if (value) {
      return (
        <span>
          <i className={icon}></i> {value}{" "}
        </span>
      );
    }
  };

  return (
    <div className="p-2 rounded-lg">
      <img
        src={room.hinhAnh}
        alt="image"
        className="h-[200px] w-full rounded-lg"
      />
      <div className="bg-white rounded-lg py-2 mt-2 text-sm ">
        <div>
          <h1 className="font-bold text-slate-800">{room.tenPhong}</h1>
          <p className=" text-blue-800 mt-2">
            <span className="font-bold">${room.giaTien}</span>
            {labelPerMonth}
          </p>
        </div>
        {/* room */}
        <p className="mt-2">
          <span className="mr-1">{labelRoom}:</span>
          {renderRoomIcon("fas fa-couch", room.khach)}
          {renderRoomIcon("fa-solid fa-bed", room.phongNgu)}
          {renderRoomIcon("fa-solid fa-shower", room.phongTam)}
        </p>
      </div>
    </div>
  );
}
