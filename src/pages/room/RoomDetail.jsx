import { Divider } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { getRoomDetails } from "../../redux/roomSlice";
import Comment from "./Comment";

import DetailHeader from "./DetailHeader";

export default function RoomDetail() {
  let [detail, setDetail] = useState(undefined);
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

  return (
    <div>
      <Divider />
      <div className="container">
        {detail && <DetailHeader room={detail} />}
        {roomId && <Comment roomId={roomId} />}
      </div>
    </div>
  );
}
