import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { labelListRentedRoom } from "../../../constants/constants";
import { getRentedRoomsByUser } from "../../../redux/userSlice";
import RentedRoom from "./RentedRoom";

export default function ListRentedRoom() {

  const userInfo = useSelector((state) => state.userSlice.user)
  const [listRoom, setListRoom] = useState([]);

  useEffect(() => {
    getRentedRoomsByUser({userId: userInfo.user.id})
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
