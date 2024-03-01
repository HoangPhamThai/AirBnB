import { Tag } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  labelBathRoom,
  labelBedRoom,
  labelFavorite,
  labelLivingRoom,
  labelServices,
  labelAirConditioner,
  labelKitchen,
  labelParkingSlot,
  labelPool,
  labelTV,
  labelWashingMachine,
  labelWiFi,
} from "../../constants/constants";
import { getLocationMetadata } from "../../redux/metadataSlice";
import {
  getElementById,
  renderRoomIcon,
  renderServiceIcon,
} from "../../utils/utils";
import BookRoomPanel from "./BookRoomPanel";

export default function DetailHeader({ room }) {
  const dispatch = useDispatch();
  const listLocation = useSelector((state) => state.metadataSlice.listLocation);

  useEffect(() => {
    dispatch(getLocationMetadata());
  }, []);

  const renderEvaluation = () => {
    const location = getElementById(room.id, listLocation);
    if (location) {
      return (
        <div className="flex justify-between text-gray-400 text-sm my-3">
          <div>
            {location.tenViTri} - {location.tinhThanh} - {location.quocGia}
          </div>
          <div>
            <i className="fa-regular fa-heart"></i>
            <span className="ml-1">{labelFavorite}</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="text-xl font-bold">{room.tenPhong}</div>
      {renderEvaluation()}
      <img src={room.hinhAnh} />

      <div className="my-3 grid grid-cols-2">
        <div>
          <Tag color="#108ee9">
            {labelLivingRoom} {renderRoomIcon("fas fa-couch", room.khach)}
          </Tag>
          <Tag color="#108ee9">
            {labelBedRoom} {renderRoomIcon("fa-solid fa-bed", room.phongNgu)}
          </Tag>
          <Tag color="#108ee9">
            {labelBathRoom}{" "}
            {renderRoomIcon("fa-solid fa-shower", room.phongTam)}
          </Tag>
          <p className="text-gray-400 text-sm my-3 text-justify mr-3">
            {room.moTa}
          </p>
          <div>
            <p className="text-sm mb-3">{labelServices}:</p>
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
              {renderServiceIcon(
                "fa-solid fa-kitchen-set",
                room.bep,
                labelKitchen
              )}
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
        </div>
        <div>
          <BookRoomPanel room={room} />
        </div>
      </div>
    </div>
  );
}
