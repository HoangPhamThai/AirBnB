import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { labelListRentedRoom } from "../../../constants/constants";
import { getRentedRoomsByUser } from "../../../redux/userSlice";
import RentedRoom from "./RentedRoom";

export default function ListRentedRoom() {
  const [listRoom, setListRoom] = useState([]);

  useEffect(() => {
    getRentedRoomsByUser()
      .then((result) => {
        setListRoom(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className=" text-xl font-bold mb-[20px]">{labelListRentedRoom}</div>

      {listRoom &&
        listRoom.map((room) => {
          return <RentedRoom key={room.id} roomInfo={room} />;
        })}
    </div>
  );
}
