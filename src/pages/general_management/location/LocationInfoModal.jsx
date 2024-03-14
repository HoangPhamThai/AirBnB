import { Button, Form, Input, message, Modal } from 'antd';
import React from 'react'
import { useState } from 'react';
import { fieldKey, labelCountry, labelImage, labelLocationName, labelName, labelProvince, messages } from '../../../constants/constants';
import { addNewLocation, updateLocation } from '../../../redux/managementSlice';

export default function LocationInfoModal({ label, initValue, onUpdateSuccess, mode }) {

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
    if (mode === "add"){
      addNewLocation(values)
      .then((result) => {
        console.log(result);
        message.success(labelAddNewUserSuccess)
        handleOk()
        onUpdateSuccess()
      })
      .catch((err) => {
        console.log(err);
      });
    }else if (mode === "edit"){
      updateLocation({...values, id: initValue.key})
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
          {/* Ten vi tri */}
          <Form.Item
            colon={false}
            label={labelLocationName}
            name={fieldKey.locationName}
            rules={[
              {
                required: true,
                message: messages.fieldCannotNull,
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* Tinh thanh */}
          <Form.Item
            colon={false}
            label={labelProvince}
            name={fieldKey.province}
            rules={[
              {
                required: true,
                message: messages.fieldCannotNull,
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* Quoc gia */}
          <Form.Item
            colon={false}
            label={labelCountry}
            name={fieldKey.country}
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
            name={fieldKey.locationImage}
            label={labelImage}
            rules={[{ required: true, message: messages.fieldCannotNull }]}
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
  )
}
