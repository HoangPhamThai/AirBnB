import { Flex, Input } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  labelAddNewBooking,
  mode,
  searchByUserIdHint,
} from "../../../constants/constants";
import { getListBooking } from "../../../redux/bookingSlice";
import ListBooking from "./ListBooking";
import { SearchOutlined } from "@ant-design/icons";
import BookingInfoModal from "./BookingInfoModal";

export default function BookingManagement() {
  const [listBooking, setListBooking] = useState([]);

  const updateListBooking = () => {
    getListBooking()
      .then((result) => {
        setListBooking(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    updateListBooking();
  }, []);

  return (
    <div >
      <Flex gap="small">
        <Input
          addonBefore={<SearchOutlined />}
          placeholder={searchByUserIdHint}
        />

        <BookingInfoModal onUpdateSuccess={()=>{
          updateListBooking()
        }} label={labelAddNewBooking} mode={mode.add}
        />
      </Flex>

      <div className="my-3">
        <ListBooking
          listBooking={listBooking}
          onListChanged={() => {
            updateListBooking();
          }}
        />
      </div>
    </div>
  );
}
