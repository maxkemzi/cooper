import axios from "axios";

const $api = axios.create({
	withCredentials: true,
	baseURL: process.env.API_URL
});

// Attaching an authorization token to request
$api.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
	return config;
});

$api.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config;
		if (
			error.response.status === 401 &&
			error.config &&
			!error.config.isRetry
		) {
			originalRequest.isRetry = true;
			try {
				const response = await axios.get(
					`${process.env.API_URL}/auth/refresh`,
					{withCredentials: true}
				);
				localStorage.setItem("token", response.data.tokens.access);

				const originalResponse = await $api.request(originalRequest);
				return originalResponse;
			} catch (e) {
				console.log("Not authorized!");
			}
		}
		throw error;
	}
);

export default $api;
