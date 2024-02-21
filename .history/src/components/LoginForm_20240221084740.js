import React from "react";
import AuthForm from "./AuthForm";

const LoginForm = () => {
	return (
		<div className="login-form">
			<h1>Đăng nhập</h1>
			<AuthForm type="login" />
		</div>
	);
};

export default LoginForm;
