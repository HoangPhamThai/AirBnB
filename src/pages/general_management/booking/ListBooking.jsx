import { Button, Space, Table } from "antd";
import React from "react";
import {
  fieldKey,
  labelAction,
  labelBookingId,
  labelDelete,
  labelEdit,
  labelLeaveDate,
  labelRoomId,
  labelStartDate,
} from "../../../constants/constants";
import { toDateAndTime } from "../../../utils/utils";

export default function ListBooking({ listBooking, onListChanged }) {
  const columns = [
    {
      title: labelBookingId,
      dataIndex: fieldKey.bookingId,
      key: fieldKey.bookingId,
      render: (bookingId)=><a className="text-blue-500" onClick={()=>{
        console.log(bookingId)
      }}>{bookingId}</a>
    },
    {
      title: labelRoomId,
      dataIndex: fieldKey.roomId,
      key: fieldKey.roomId,
    },
    {
      title: labelStartDate,
      dataIndex: fieldKey.startDate,
      key: fieldKey.startDate,
    },
    {
      title: labelLeaveDate,
      dataIndex: fieldKey.leaveDate,
      key: fieldKey.leaveDate,
    },
    {
      title: labelAction,
      key: fieldKey.role,
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
    if (listBooking) {
      return listBooking.map((booking, _) => {
        return {
          key: booking.id,
          bookingId: booking.id,
          roomId: booking.maPhong,
          startDate: toDateAndTime(booking.ngayDen),
          leaveDate: toDateAndTime(booking.ngayDi),
          guestNumber: booking.soLuongKhach,
          guestId: booking.maNguoiDung,
        };
      });
    }
    return undefined;
  };

  return <Table columns={columns} dataSource={getData()} pagination={false} />;
}
