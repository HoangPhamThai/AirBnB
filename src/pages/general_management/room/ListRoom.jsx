import { Button, Image, Space, Table } from "antd";
import React from "react";
import RoomInfo from "../../../components/RoomInfo";
import {
  fieldKey,
  labelAction,
  labelDelete,
  labelEdit,
  labelImage,
  labelInfo,
  mode,
} from "../../../constants/constants";
import { deleteRoom } from "../../../redux/managementSlice";
import RoomInfoModal from "./RoomInfoModal";

export default function ListRoom({ listRoom, onListChanged }) {
  const columns = [
    {
      title: labelImage,
      dataIndex: fieldKey.image,
      key: fieldKey.image,
      render: (image) => <Image width={250} height={150} src={image} alt="" />,
    },
    {
      title: labelInfo,
      dataIndex: fieldKey.info,
      key: fieldKey.info,
      render: (_, record) => {
        return <RoomInfo room={record.info} />;
      },
    },
    {
      title: labelAction,
      key: fieldKey.action,
      render: (_, record) => (
        <Space>
          <RoomInfoModal
            mode={mode.edit}
            label={labelEdit}
            onUpdateSuccess={onListChanged}
            initValue={{
              id: record.key,
              tenPhong: record.info.tenPhong,
              khach: record.info.khach,
              phongNgu: record.info.phongNgu,
              giuong: record.info.giuong,
              phongTam: record.info.phongTam,
              moTa: record.info.moTa,
              giaTien: record.info.giaTien,
              mayGiat: record.info.mayGiat,
              banLa: record.info.banLa,
              tivi: record.info.tivi,
              dieuHoa: record.info.dieuHoa,
              wifi: record.info.wifi,
              bep: record.info.bep,
              doXe: record.info.doXe,
              hoBoi: record.info.hoBoi,
              maViTri: record.info.maViTri,
              hinhAnh: record.image,
            }}
          />

          <Button
            danger={true}
            onClick={() => {
              deleteRoom(record.key)
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
