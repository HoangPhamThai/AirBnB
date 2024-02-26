import { Button, Flex, Input } from "antd";
import React from "react";
import ListRoom from "./ListRoom";
import CustomPagination from "../components/CustomPagination";
import { useState } from "react";
import {
  labelAddNewRoom,
  searchByRoomHint,
} from "../../../constants/constants";
import { getListRoomByPage } from "../../../redux/roomSlice";
import { useEffect } from "react";

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
    <div className="container">
      <Flex gap="small">
        <Input.Search placeholder={searchByRoomHint} onSearch={onSearch} />

        <Button className="border-blue-600 text-blue-700">
          {labelAddNewRoom}
        </Button>
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
