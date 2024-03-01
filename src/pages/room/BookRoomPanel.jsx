import { Button, DatePicker, message } from "antd";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import GuestSelection from "../../components/search_room/GuestSelection";
import {
  labelBookingSuccess,
  labelBookRoom,
  labelLeaveDate,
  labelPerNight,
  labelPleaseLoginFirst,
  labelStartDate,
} from "../../constants/constants";
import { bookRoom } from "../../redux/bookingSlice";
import ReportBookingRoom from "./ReportBookingRoom";

const { RangePicker } = DatePicker;

export default function BookRoomPanel({ room }) {
  const userInfo = useSelector((state) => state.userSlice.user);
  const [guest, setGuest] = useState({
    adult: 1,
    enfant: 0,
    baby: 0,
    pet: 0,
  });
  const [dates, setDates] = useState([]);

  return (
    <div className="rounded-lg border bg-gray-100 p-5">
      <p>
        ${room.giaTien}
        {labelPerNight}
      </p>
      <div className="flex border rounded-xl bg-white mt-3">
        <RangePicker
          className="border-none"
          showTime={false}
          placeholder={[labelStartDate, labelLeaveDate]}
          onChange={(_, dateStrings) => {
            setDates(dateStrings);
          }}
        />
        <GuestSelection
          className="text-black"
          onChanged={(guest) => {
            setGuest(guest);
          }}
        />
      </div>
      <div className="text-center mt-3">
        <Button
          className="bg-pink-600 text-white font-bold w-full"
          disabled={
            !(guest?.adult + guest?.enfant + guest?.baby && dates?.length === 2)
          }
          onClick={() => {
            console.log(userInfo);
            if (userInfo){
              bookRoom({
                roomId: room.id,
                startDate: dates[0],
                leaveDate: dates[1],
                totalGuest: guest?.adult + guest?.enfant + guest?.baby,
                userId: userInfo?.user?.id,
              })
                .then((result) => {
                  console.log(result);
                  message.success(labelBookingSuccess);
                })
                .catch((err) => {
                  console.log(err);
                  message.error(err.message);
                });
            }else{
              message.error(labelPleaseLoginFirst);
            }
            
          }}
        >
          {labelBookRoom}
        </Button>
      </div>
      <div className="border bg-white rounded-xl mt-3 p-3 text-gray-400">
        <ReportBookingRoom room={room} guest={guest} dateStrings={dates} />
      </div>
    </div>
  );
}
