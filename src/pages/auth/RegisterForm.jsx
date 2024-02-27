import React from "react";
import { iconLogo } from "../../constants/app_asset";
import { Button, DatePicker, Form, Input, message, Select } from "antd";
import {
  fieldKey,
  labelBirthday,
  labelConfirmPassword,
  labelEmail,
  labelFemale,
  labelGender,
  labelLogIn,
  labelLoginFailure,
  labelLoginSuccess,
  labelMale,
  labelName,
  labelPassword,
  labelPhoneNumber,
  labelSignUp,
  messages,
} from "../../constants/constants";
import { loginApi, registerApi } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { appPath } from "../../constants/app_path";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: message.fieldCannotNull,
      },
    ],
  };

  const onFinish = (values) => {
    console.log(values);
    registerApi({
      name: values.name,
      email: values.email,
      password: values.password,
      phone: values.phone,
      birthday: `${values.birthday.$D}/${values.birthday.$M + 1}/${
        values.birthday.$y
      }`,
      gender: values.gender,
    })
      .then((result) => {
        console.log(result);
        navigate(appPath.login)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container text-center">
      <img src={iconLogo} className="h-[200px] mx-auto mt-20" />
      <h1 className="text-3xl font-bold my-10">{labelSignUp}</h1>

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
          remember: true,
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
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        {/* confirm password */}
        <Form.Item
          colon={false}
          label={labelConfirmPassword}
          name={fieldKey.confirmPassword}
          hasFeedback
          rules={[
            {
              required: true,
              message: messages.fieldCannotNull,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(messages.notMatchPassword));
              },
            }),
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
            <Option value={true}>{labelMale}</Option>
            <Option value={false}>{labelFemale}</Option>
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
            {labelLogIn}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;
