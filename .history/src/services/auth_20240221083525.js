const mockAPI = {
	register: async (data) => {
		try {
			const response = await fetch(
				"https://airbnbnew.cybersoft.edu.vn/api/auth/signup",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);
			const result = await response.json();
			return result;
		} catch (error) {
			console.log(error);
			return {
				success: false,
				message: "Có lỗi xảy ra, vui lòng thử lại",
			};
		}
	},
	login: async (data) => {
		try {
			const response = await fetch(
				"https://airbnbnew.cybersoft.edu.vn/api/auth/signin",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);
			const result = await response.json();
			return result;
		} catch (error) {
			console.log(error);
			return {
				success: false,
				message: "Có lỗi xảy ra, vui lòng thử lại",
			};
		}
	},
};

export default mockAPI;
