import React from "react";
import { iconLogo } from "../../constants/app_asset";
import { Button, Form, Input, message } from "antd";
import {
  fieldKey,
  labelEmail,
  labelLogIn,
  labelLoginFailure,
  labelLoginSuccess,
  labelPassword,
  messages,
} from "../../constants/constants";
import { loginApi } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { appPath } from "../../constants/app_path";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

const LoginForm = () => {

	const navigate = useNavigate()
	const dispatch = useDispatch()

  const onFinish = (values) => {
	
	
    loginApi(values)
	.then(result => {
	
		navigate(appPath.home)
		dispatch(setUser(result))
		message.success(labelLoginSuccess)
		
	}).catch(err => {
		console.log(err)
		message.success(labelLoginFailure)
	})
  };

  return (
    <div className="container text-center">
      <img src={iconLogo} className="h-[200px] mx-auto mt-20" />
      <h1 className="text-3xl font-bold my-10">{labelLogIn}</h1>

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
        <Form.Item
          colon={false}
          label={labelEmail}
          name={fieldKey.email}
          rules={[
			{
				type: 'email',
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

        <Form.Item
          colon={false}
          label={labelPassword}
          name={fieldKey.password}
          rules={[
			{
				required: true,
				message: messages.fieldCannotNull,
			}
          ]}
        >
          <Input.Password />
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

export default LoginForm;
