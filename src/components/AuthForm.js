import React, { useState } from "react";

const AuthForm = ({ type }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// Xác thực thông tin
		if (!validateEmail(email)) {
			setErrorMessage("Email không hợp lệ");
			return;
		}

		if (!validatePassword(password)) {
			setErrorMessage("Mật khẩu không mạnh");
			return;
		}

		// Gửi yêu cầu đến API backend

		// Xử lý phản hồi từ API
	};

	return (
		<form onSubmit={handleSubmit}>
			{type === "login" ? (
				<>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Mật khẩu"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type="submit">Đăng nhập</button>
				</>
			) : (
				<>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Mật khẩu"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Xác nhận mật khẩu"
						// ...
					/>
					<button type="submit">Đăng ký</button>
				</>
			)}

			{errorMessage && <p className="error-message">{errorMessage}</p>}
		</form>
	);
};

export default AuthForm;
