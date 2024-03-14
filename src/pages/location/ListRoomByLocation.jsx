import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { labelListRoom } from "../../constants/constants";
import { getListRoomByLocation } from "../../redux/locationSlice";
import RentedRoom from "../customer/components/RentedRoom";
import LocationCategory from "../home/components/LocationCategory";

export default function ListRoomByLocation() {
  const [listRooom, setListRoom] = useState([]);
  const { locationId } = useParams();

  const listLocation = useSelector((state) => state.metadataSlice.listLocation);

  useEffect(() => {
    getListRoomByLocation({ locationId })
      .then((res) => {
        setListRoom(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getLocationName = () => {
    let location = listLocation.find((e) => {
      return e.id === parseInt(locationId);
    });
    return location?.tinhThanh;
  };

  return (
    <div>
      <LocationCategory />
      <div className="text-2xl font-bold mt-[20px] text-center text-pink-700">{getLocationName()}</div>
      <div className="text-xl font-bold mb-[20px]">{labelListRoom}</div>
      {listRooom &&
        listRooom.map((room) => {
          return <RentedRoom key={room.id} roomInfo={room} />;
        })}
    </div>
  );
}
