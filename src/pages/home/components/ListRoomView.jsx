import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { labelListRoom } from "../../../constants/constants";
import { getListRoomByPage } from "../../../redux/roomSlice";
import CustomPagination from "../../general_management/components/CustomPagination";
import RoomItem from "./RoomItem";

export default function ListRoomView() {
  const [currentPage, setCurrentPage] = useState(1);
  const [listRoom, setListRoom] = useState([]);
  const [totalRow, setTotalRow] = useState(undefined);

  const updateListRoom = ({ pageId }) => {
    getListRoomByPage({ pageId, pageSize: 20 })
      .then((result) => {
        setTotalRow(result.totalRow);
        setListRoom(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    updateListRoom({ pageId: 1 });
  }, []);

  const renderListRoom = (listRoom) => {
    return (
      <div className="grid grid-cols-4 gap-2 mb-3">
        {listRoom.map((room) => {
          return <RoomItem room={room} key={room.id} />;
        })}
      </div>
    );
  };

  return (
    <div>
      <h1 className="my-3 font-bold text-xl">{labelListRoom}</h1>
      {renderListRoom(listRoom)}
      <CustomPagination
        currentPage={currentPage}
        totalRow={totalRow}
        onSelectedPage={(pageId) => {
          setCurrentPage(pageId);
          updateListRoom({ pageId: pageId });
        }}
      />
    </div>
  );
}
