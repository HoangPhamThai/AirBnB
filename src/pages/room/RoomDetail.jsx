import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRoomDetails } from "../../redux/roomSlice";

export default function RoomDetail() {
  let [detail, setDetail] = useState();
  let { roomId } = useParams();

  useEffect(() => {
    getRoomDetails(roomId)
      .then((result) => {
        setDetail(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>RoomDetail</div>;
}
