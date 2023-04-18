import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://dummy.restapiexample.com/api/v1/',
	timeout: 15000,
	headers: {},
})

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
	const token = getToken();
	// Do something before request is sent
	if(token) {
		config.headers['Authorization'] = token;
	}
	return config;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function(response) {
	return response;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
})

export default axiosInstance;