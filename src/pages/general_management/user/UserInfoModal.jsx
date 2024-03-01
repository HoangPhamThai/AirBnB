import { DatePicker, Form, Input, Select, Button, Modal, message } from "antd";
import React from "react";
import { useState } from "react";
import {
  fieldKey,
  labelAddNewUser,
  labelAddNewUserSuccess,
  labelBirthday,
  labelEditSuccess,
  labelEmail,
  labelFemale,
  labelGender,
  labelMale,
  labelName,
  labelPassword,
  labelPhoneNumber,
  labelRole,
  messages,
  userRole,
} from "../../../constants/constants";
import { addNewUser, updateUser } from "../../../redux/managementSlice";

const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: messages.fieldCannotNull,
    },
  ],
};

export default function UserInfoModal({ label, initValue, onUpdateSuccess, mode }) {
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
      addNewUser(values)
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
      updateUser({...values, id: initValue.key})
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
          {/* Name */}
          <Form.Item
            colon={false}
            label={labelName}
            name={fieldKey.name}
            rules={[
              {
                required: true,
                message: messages.fieldCannotNull,
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* Email */}
          <Form.Item
            colon={false}
            label={labelEmail}
            name={fieldKey.email}
            rules={[
              {
                type: "email",
                message: messages.invalidEmail,
              },
              {
                required: true,
                message: messages.fieldCannotNull,
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* password */}
          <Form.Item
            colon={false}
            label={labelPassword}
            name={fieldKey.password}
            rules={[
              {
                required: true,
                message: messages.fieldCannotNull,
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* phone */}
          <Form.Item
            colon={false}
            name={fieldKey.phone}
            label={labelPhoneNumber}
            rules={[{ required: true, message: messages.fieldCannotNull }]}
          >
            <Input style={{ width: "100%" }} type="number" />
          </Form.Item>

          {/* birthday */}
          <Form.Item
            colon={false}
            name={fieldKey.birthday}
            label={labelBirthday}
            {...config}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          {/* gender */}
          <Form.Item
            colon={false}
            name={fieldKey.gender}
            label={labelGender}
            rules={[{ required: true, message: messages.selectGender }]}
          >
            <Select>
              <Select.Option value={true}>{labelMale}</Select.Option>
              <Select.Option value={false}>{labelFemale}</Select.Option>
            </Select>
          </Form.Item>

          {/* role */}
          <Form.Item
            colon={false}
            name={fieldKey.role}
            label={labelRole}
            rules={[{ required: true, message: messages.selectGender }]}
          >
            <Select>
              <Select.Option value={userRole.admin}>
                {userRole.admin}
              </Select.Option>
              <Select.Option value={userRole.user}>
                {userRole.user}
              </Select.Option>
            </Select>
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
