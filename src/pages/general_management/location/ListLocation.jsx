import { Button, Space, Table } from "antd";
import React from "react";
import {
  fieldKey,
  labelAction,
  labelDelete,
  labelEdit,
  labelImage,
  labelInfo,
} from "../../../constants/constants";

export default function ListLocation({ listLocation, onListChanged }) {
  const columns = [
    {
      title: labelImage,
      dataIndex: fieldKey.image,
      key: fieldKey.image,
      render: (image) => (
        <img src={image} alt="" className="object-cover w-[200px] overflow-hidden"/>
      ),
    },
    {
      title: labelInfo,
      dataIndex: fieldKey.info,
      key: fieldKey.info,
      render: (_, record) => {
        console.log(record.info)
        return (
            <div>
              <p>{record.info.tenViTri}</p>
              <p>{record.info.tinhThanh}</p>
              <p>{record.info.quocGia}</p>
            </div>
          )
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
    if (listLocation) {
      return listLocation.map((location, _) => {
        return {
          key: location.id,
          image: location.hinhAnh,
          info: location,
        };
      });
    }
  };

  return <Table columns={columns} dataSource={getData()} pagination={false} />;
}
