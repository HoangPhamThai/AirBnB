import { Avatar, Divider, Rate } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { getCommentByRoomId } from "../../redux/roomSlice";

export default function Comment({ roomId }) {
  const [listComment, setListComment] = useState([]);

  useEffect(() => {
    console.log(roomId);
    getCommentByRoomId({ roomId })
      .then((result) => {
        setListComment(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderComment = () => {
    if (listComment) {
      return (
        <div>
          {listComment.map((comment) => {
            return (
              <div key={comment.id}>
                <div className="flex mb-3">
                  {comment.avatar ? (
                    <Avatar src={comment.avatar} size={50} />
                  ) : (
                    <Avatar icon={<UserOutlined />} size={50} />
                  )}
                  <div className="ml-3">
                    <div>{comment.tenNguoiBinhLuan}</div>
                    <div>{comment.ngayBinhLuan}</div>
                    <Rate allowHalf defaultValue={comment.saoBinhLuan} />
                    <div>{comment.noiDung}</div>
                  </div>
                </div>
                <Divider />
              </div>
            );
          })}
        </div>
      );
    }
  };

  return <div>{renderComment()}</div>;
}
