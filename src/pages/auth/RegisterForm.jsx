import React from "react";
import AuthForm from "./AuthForm";

const RegisterForm = () => {
	return (
		<div className="register-form">
			<h1>Đăng ký</h1>
			<AuthForm type="register" />
		</div>
	);
};

export default RegisterForm;
