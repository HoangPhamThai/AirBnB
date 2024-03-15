import { Button, Space, Table } from "antd";
import moment from "moment";
import React from "react";
import {
  fieldKey,
  labelAction,
  labelBookingId,
  labelDelete,
  labelEdit,
  labelLeaveDate,
  labelNumberOfGuests,
  labelRoomId,
  labelStartDate,
  mode,
} from "../../../constants/constants";
import { deleteBooking } from "../../../redux/managementSlice";
import { toDateAndTime } from "../../../utils/utils";
import BookingInfoModal from "./BookingInfoModal";

export default function ListBooking({ listBooking, onListChanged }) {
  const columns = [
    {
      title: labelBookingId,
      dataIndex: fieldKey.bookingId,
      key: fieldKey.bookingId,
      render: (bookingId) => (
        <a
          className="text-blue-500"
          onClick={() => {
            console.log(bookingId);
          }}
        >
          {bookingId}
        </a>
      ),
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
      title: labelNumberOfGuests,
      dataIndex: fieldKey.guestNumber,
      key: fieldKey.guestNumber,
    },
    {
      title: labelAction,
      key: fieldKey.role,
      render: (_, record) => (
        <Space>
          <BookingInfoModal
            mode={mode.edit}
            label={labelEdit}
            onUpdateSuccess={onListChanged}
            initValue={{
              key: record.key,
              maPhong: record.bookingId,
              ngayDen: moment(new Date(record.startDate)),
              ngayDi: moment(new Date(record.leaveDate)),
              soLuongKhach: record.guestNumber,
              maNguoiDung: record.guestId,
            }}
          />

          <Button
            danger={true}
            onClick={() => {
              deleteBooking(record.key)
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
