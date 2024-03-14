import { Button, Image, Space, Table } from "antd";
import React from "react";
import {
  fieldKey,
  labelAction,
  labelDelete,
  labelEdit,
  labelImage,
  labelInfo,
  mode,
} from "../../../constants/constants";
import { deleteLocation } from "../../../redux/managementSlice";
import LocationInfoModal from "./LocationInfoModal";

export default function ListLocation({ listLocation, onListChanged }) {
  const columns = [
    {
      title: labelImage,
      dataIndex: fieldKey.image,
      key: fieldKey.locationImage,
      render: (image) => {
        return (
          <Image
            width={200}
            src={image}
            alt=""
            className="object-cover w-[200px] overflow-hidden"
          />
        );
      },
    },
    {
      title: labelInfo,
      dataIndex: fieldKey.info,
      key: fieldKey.info,
      render: (_, record) => {
        return (
          <div>
            <p>{record.info.tenViTri}</p>
            <p>{record.info.tinhThanh}</p>
            <p>{record.info.quocGia}</p>
          </div>
        );
      },
    },
    {
      title: labelAction,
      key: fieldKey.action,
      render: (_, record) => {
        console.log(record);
        return (
          <Space>
            <LocationInfoModal
              mode={mode.edit}
              label={labelEdit}
              onUpdateSuccess={onListChanged}
              initValue={{
                key: record.key,
                hinhAnh: record.image,
                quocGia: record.info.quocGia,
                tenViTri: record.info.tenViTri,
                tinhThanh: record.info.tinhThanh,
              }}
            />

            <Button
              danger={true}
              onClick={() => {
                deleteLocation(record.key)
                  .then((res) => {
                    console.log(res);
                    onListChanged();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              {labelDelete}
            </Button>
          </Space>
        );
      },
    },
  ];

  const getData = () => {
    if (listLocation) {
      console.log(listLocation);
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
