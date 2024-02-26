import { Button, Flex, Input } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  labelAddNewBooking,
  searchByUserIdHint,
} from "../../../constants/constants";
import { getListBooking } from "../../../redux/bookingSlice";
import ListBooking from "./ListBooking";
import { SearchOutlined } from "@ant-design/icons";

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
    <div className="container">
      <Flex gap="small">
        <Input
          addonBefore={<SearchOutlined />}
          placeholder={searchByUserIdHint}
        />

        <Button className="border-blue-600 text-blue-700">
          {labelAddNewBooking}
        </Button>
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
