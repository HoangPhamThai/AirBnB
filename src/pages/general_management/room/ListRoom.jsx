import { Button, Space, Table } from "antd";
import React from "react";
import RoomInfo from "../../../components/RoomInfo";
import {
  fieldKey,
  labelAction,
  labelDelete,
  labelEdit,
  labelImage,
  labelInfo,
} from "../../../constants/constants";

export default function ListRoom({ listRoom, onListChanged }) {
  const columns = [
    {
      title: labelImage,
      dataIndex: fieldKey.image,
      key: fieldKey.image,
      render: (image) => <img src={image} alt="image" className="w-[200px]" />,
    },
    {
      title: labelInfo,
      dataIndex: fieldKey.info,
      key: fieldKey.info,
      render: (_, record) => {
        return <RoomInfo roomInfo={record.info} />;
      },
    },
    {
      title: labelAction,
      key: fieldKey.action,
      render: (_, record) => (
        <Space>
          <Button className="text-blue-600" onClick={() => {}}>
            {labelEdit}
          </Button>

          <Button danger={true} onClick={() => {}}>
            {labelDelete}
          </Button>
        </Space>
      ),
    },
  ];

  const getData = () => {
    if (listRoom) {
      return listRoom.map((room, _) => {
        return {
          key: room.id,
          image: room.hinhAnh,
          info: room,
        };
      });
    }
    return undefined;
  };

  return <Table columns={columns} dataSource={getData()} pagination={false} />;
}
