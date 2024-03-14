import { Button, Flex, Input } from "antd";
import React from "react";
import ListRoom from "./ListRoom";
import CustomPagination from "../components/CustomPagination";
import { useState } from "react";
import {
  labelAddNewRoom,
  mode,
  searchByRoomHint,
} from "../../../constants/constants";
import { getListRoomByPage } from "../../../redux/roomSlice";
import { useEffect } from "react";
import RoomInfoModal from "./RoomInfoModal";

export default function RoomManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [listRoom, setListRoom] = useState([]);
  const [totalRow, setTotalRow] = useState(undefined);
  const [keyword, setKeyword] = useState("");

  const updateListRoom = ({ pageId, keyword = "" }) => {
    getListRoomByPage({ pageId: pageId, keyword: keyword })
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

  const onSearch = (value, _) => {
    setKeyword(value);
    updateListRoom({ pageId: 1, keyword: value });
  };

  return (
    <div >
      <Flex gap="small">
        <Input.Search placeholder={searchByRoomHint} onSearch={onSearch} />

        <RoomInfoModal onUpdateSuccess={()=>{
          updateListRoom({pageId:1})
        }} label={labelAddNewRoom} mode={mode.add}/>
      </Flex>

      <div className="my-3">
        <ListRoom
          listRoom={listRoom}
          onListChanged={() => {
            updateListRoom({ pageId: currentPage, keyword: keyword });
          }}
        />
      </div>

      <CustomPagination
        currentPage={currentPage}
        totalRow={totalRow}
        onSelectedPage={(pageId) => {
          setCurrentPage(pageId);
          updateListRoom({ pageId: pageId, keyword: keyword });
        }}
      />
    </div>
  );
}
