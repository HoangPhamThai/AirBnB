import { Button, DatePicker, Form, Input, message, Modal } from "antd";
import React from "react";
import { useState } from "react";
import {
  fieldKey,
  labelEditSuccess,
  labelGuestId,
  labelGuestNumber,
  labelLeaveDate,
  labelRoomId,
  labelStartDate,
  messages,
} from "../../../constants/constants";
import { addNewBooking, updateBooking } from "../../../redux/managementSlice";
import locale from "antd/es/date-picker/locale/en_US";

const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: messages.fieldCannotNull,
    },
  ],
};

export default function BookingInfoModal({
  label,
  initValue,
  onUpdateSuccess,
  mode,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    if (mode === "add") {
      addNewBooking(values)
        .then((result) => {
          console.log(result);
          message.success(messages.success.newLocation);
          handleOk();
          onUpdateSuccess();
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (mode === "edit") {
      updateBooking({ ...values, id: initValue.key })
        .then((result) => {
          console.log(result);
          message.success(labelEditSuccess);
          handleOk();
          onUpdateSuccess();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        className="border-blue-600 text-blue-700"
      >
        {label}
      </Button>
      <Modal
        title={label}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
            margin: "auto",
          }}
          initialValues={initValue}
          onFinish={onFinish}
          autoComplete="off"
        >
          {/* Ma phong */}
          <Form.Item
            colon={false}
            label={labelRoomId}
            name={fieldKey.booking.roomId}
            rules={[
              {
                required: true,
                message: messages.fieldCannotNull,
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* Ma nguoi dung */}
          <Form.Item
            colon={false}
            label={labelGuestId}
            name={fieldKey.booking.guestId}
            rules={[
              {
                required: true,
                message: messages.fieldCannotNull,
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* Ngay den */}
          <Form.Item
            colon={false}
            name={fieldKey.booking.startDate}
            label={labelStartDate}
            {...config}
          >
            <DatePicker
              style={{ width: "100%" }}
              locale={locale}
            />
          </Form.Item>

          {/* Ngay di */}
          <Form.Item
            colon={false}
            name={fieldKey.booking.leaveDate}
            label={labelLeaveDate}
            {...config}
          >
            <DatePicker
              style={{ width: "100%" }}
              locale={locale}
            />
          </Form.Item>

          {/* So luong khach */}
          <Form.Item
            colon={false}
            label={labelGuestNumber}
            name={fieldKey.booking.totalGuest}
            rules={[
              {
                required: true,
                message: messages.fieldCannotNull,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            style={{
              textAlign: "left",
            }}
          >
            <Button
              htmlType="submit"
              className="bg-slate-800 text-white w-[200px] mt-3"
            >
              {label}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
