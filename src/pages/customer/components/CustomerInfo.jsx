import {
  Avatar,
  Button,
  DatePicker,
  Flex,
  Form,
  Input,
  message,
  Modal,
  Select,
  Upload,
} from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import {
  labelEmail,
  labelConfirmedEmail,
  labelEditProfile,
  labelConfirm,
  fieldKey,
  messages,
  labelName,
  labelPhoneNumber,
  labelBirthday,
  labelGender,
  labelMale,
  labelFemale,
  labelEditSuccess,
} from "../../../constants/constants";
import ListRentedRoom from "./ListRentedRoom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from "../../../redux/managementSlice";
import { setUser, uploadAvatar } from "../../../redux/userSlice";

const { Option } = Select;

export default function CustomerInfo() {
  const userInfo = useSelector((state) => state.userSlice.user);
  const dispatch = useDispatch()

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

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    console.log(info)
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (url) => {
        console.log(url)
        setImageUrl(url);
        uploadAvatar({url, token: userInfo.user.token}).then((res) => {
           console.log(res)
        }).catch((err) => {
           console.log(err)
        })
      });
    }
  };

  const onFinish = (values) => {
    console.log(values);
    updateUser({...values, id: userInfo.user.id}).then((res) => {
       console.log(res)
       message.success(labelEditSuccess)
       dispatch(setUser({user: res.content}))
       handleOk()

    }).catch((err) => {
       console.log(err)
    })
  };

  const renderUserInfo = () => {
    if (userInfo) {
      console.log(userInfo)
      return (
        <div>
          <h1 className="my-3 text-lg">{userInfo.user.name}</h1>

          <p>
            {labelEmail}: {userInfo.user.email}
          </p>
        </div>
      );
    }
  };

  const renderEditProfileModal = () => {
    return (
      <Modal
        title={labelEditProfile}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <div className="text-center">
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" />
            ) : (
              <Avatar size={100} icon={<UserOutlined />} />
            )}
          </Upload>
        </div>

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
          initialValues={{
            name: userInfo.user.name,
            email: userInfo.user.email,
            phone: userInfo.user.phone,
            gender: userInfo.user.gender,
          }}
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

          {/* phone */}
          <Form.Item
            colon={false}
            name={fieldKey.phone}
            label={labelPhoneNumber}
            rules={[{ required: true, message: messages.fieldCannotNull }]}
          >
            <Input style={{ width: "100%" }} type="number" />
          </Form.Item>

          {/* gender */}
          <Form.Item
            colon={false}
            name={fieldKey.gender}
            label={labelGender}
            rules={[{ required: true, message: messages.selectGender }]}
          >
            <Select>
              <Option value={true}>{labelMale}</Option>
              <Option value={false}>{labelFemale}</Option>
            </Select>
          </Form.Item>

          <div className="text-center">
            <Button htmlType="submit" className="text-blue-800 bg-blue-200">
              {labelConfirm}
            </Button>
          </div>
        </Form>
      </Modal>
    );
  };

  return (
    <div className="flex mt-3">
      <div className="text-center w-1/5">
        <div>
          <Avatar size={100} icon={<UserOutlined />} />
          <p className="text-sm text-gray-400 mt-1">
            <i className="fa-solid fa-shield-halved mr-2"></i>
            {labelConfirmedEmail}
          </p>
          <p
            className="text-sm text-gray-400 mt-1 cursor-pointer"
            onClick={() => {
              showModal();
            }}
          >
            <i className="fas fa-edit mr-2"></i>
            {labelEditProfile}
          </p>
        </div>
        {renderUserInfo()}
      </div>
      <div className="w-3/4">
        <ListRentedRoom />
      </div>
      {renderEditProfileModal()}
    </div>
  );
}
