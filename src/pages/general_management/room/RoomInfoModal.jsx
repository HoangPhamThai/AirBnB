import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
} from "antd";
import React from "react";
import { useState } from "react";
import {
  fieldKey,
  labelAirConditioner,
  labelBathRoom,
  labelBed,
  labelBedRoom,

  labelEditSuccess,
  labelImage,
  labelIron,
  labelKitchen,
  labelLivingRoom,
  labelLocationId,
  
  labelParkingSlot,
  labelPool,
  labelPrice,
  labelRoomDescription,
  labelRoomName,
  labelTV,
  labelWashingMachine,
  labelWiFi,
  messages,
} from "../../../constants/constants";
import { addNewRoom, updateRoom } from "../../../redux/managementSlice";

export default function RoomInfoModal({
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
    console.log(values);
    if (mode === "add") {
      addNewRoom(values)
        .then((res) => {
          console.log(res);
          message.success(messages.success.newRoom);
          handleOk();
          onUpdateSuccess();
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (mode === "edit") {
        updateRoom({...values, id: initValue.key})
      .then((result) => {
        console.log(result);
        message.success(labelEditSuccess)
        handleOk()
        onUpdateSuccess()
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
          wrapperCol={{
            span: 20,
          }}
          initialValues={initValue}
          onFinish={onFinish}
          autoComplete="off"
          labelCol={{ span: 6 }}
        >
          {/* Ten phong */}
          <Form.Item
            colon={false}
            label={labelRoomName}
            name={fieldKey.room.name}
            rules={[
              {
                required: true,
                message: messages.fieldCannotNull,
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* Hinh anh */}
          <Form.Item
            colon={false}
            name={fieldKey.room.image}
            label={labelImage}
            rules={[{ required: true, message: messages.fieldCannotNull }]}
          >
            <Input />
          </Form.Item>

          <div className="flex justify-between">
            <div className="w-1/2">
              {/* Tien */}
              <Form.Item
                colon={false}
                labelCol={{ span: 12 }}
                name={fieldKey.room.price}
                label={labelPrice}
                rules={[{ required: true, message: messages.fieldCannotNull }]}
              >
                <InputNumber />
              </Form.Item>

              {/* So phong khach */}
              <Form.Item
                colon={false}
                label={labelLivingRoom}
                name={fieldKey.room.living}
                labelCol={{ span: 12 }}
                rules={[
                  {
                    required: true,
                    message: messages.fieldCannotNull,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              {/* So phong ngu */}
              <Form.Item
                colon={false}
                label={labelBedRoom}
                name={fieldKey.room.bedroom}
                labelCol={{ span: 12 }}
                rules={[
                  {
                    required: true,
                    message: messages.fieldCannotNull,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
            </div>
            <div className="w-1/2">
              {/* Ma vi tri */}
              <Form.Item
                colon={false}
                labelCol={{ span: 12 }}
                name={fieldKey.room.locationId}
                label={labelLocationId}
                rules={[{ required: true, message: messages.fieldCannotNull }]}
              >
                <InputNumber />
              </Form.Item>
              {/* So giuong */}
              <Form.Item
                colon={false}
                label={labelBed}
                name={fieldKey.room.bed}
                labelCol={{ span: 12 }}
                rules={[
                  {
                    required: true,
                    message: messages.fieldCannotNull,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              {/* So phong tam */}
              <Form.Item
                colon={false}
                label={labelBathRoom}
                name={fieldKey.room.bathroom}
                labelCol={{ span: 12 }}
                rules={[
                  {
                    required: true,
                    message: messages.fieldCannotNull,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
            </div>
          </div>

          {/* Mo ta */}
          <Form.Item
            colon={false}
            label={labelRoomDescription}
            name={fieldKey.room.desc}
            rules={[
              {
                required: true,
                message: messages.fieldCannotNull,
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <div className="flex">
            <div className="w-1/3">
              <Form.Item
                colon={false}
                label={labelWashingMachine}
                name={fieldKey.room.washingMachine}
                labelCol={{ span: 12 }}
                valuePropName="checked"
              >
                <Checkbox />
              </Form.Item>

              <Form.Item
                colon={false}
                label={labelIron}
                name={fieldKey.room.iron}
                labelCol={{ span: 12 }}
                valuePropName="checked"
              >
                <Checkbox />
              </Form.Item>

              <Form.Item
                colon={false}
                label={labelTV}
                name={fieldKey.room.tv}
                labelCol={{ span: 12 }}
                valuePropName="checked"
              >
                <Checkbox />
              </Form.Item>
            </div>

            <div className="w-1/3">
              <Form.Item
                colon={false}
                label={labelAirConditioner}
                name={fieldKey.room.airCond}
                valuePropName="checked"
                labelCol={{ span: 12 }}
              >
                <Checkbox />
              </Form.Item>

              <Form.Item
                colon={false}
                label={labelWiFi}
                name={fieldKey.room.wifi}
                labelCol={{ span: 12 }}
                valuePropName="checked"
              >
                <Checkbox />
              </Form.Item>

              <Form.Item
                colon={false}
                label={labelKitchen}
                name={fieldKey.room.kitchen}
                labelCol={{ span: 12 }}
                valuePropName="checked"
              >
                <Checkbox />
              </Form.Item>
            </div>

            <div className="w-1/3">
              <Form.Item
                colon={false}
                label={labelParkingSlot}
                name={fieldKey.room.parking}
                labelCol={{ span: 12 }}
                valuePropName="checked"
              >
                <Checkbox />
              </Form.Item>

              <Form.Item
                colon={false}
                label={labelPool}
                name={fieldKey.room.pool}
                labelCol={{ span: 12 }}
                valuePropName="checked"
              >
                <Checkbox />
              </Form.Item>
            </div>
          </div>

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
