import axiosInstance from "../config/axiosConfigs";
import ApiUrl from "../utils/ApiUrls";

// const data = [
// 	{
// 		id: '',
// 		details: {
// 			full_address: [
// 				{
// 					address_type: 'home',
// 					city: '',
// 					street: '',
// 				},
// 				{
// 					address_type: 'work',
// 					city: '',
// 					street: '',
// 				}
// 			]
// 		}
// 	}
// ]

// const getAddressDetails = (data = [], type = "", key = "city") => {
// 	const index = data.findIndex(address => address.address_type === type);
// 	if(index) {
// 		return data[index][key]
// 	}
// }

// const formatEmployeeData = (employeeData) => {
// 	const formattedResult = employeeData.map(value => ({
// 		id: value.id,
// 		workCity: getAddressDetails(value.details.full_address, 'work'),
// 		workStreet: getAddressDetails(value.details.full_address, 'work', 'street'),
// 	}))
// 	return formattedResult;
// }

const getEmployeeData = async() => {
  try {
		const response = await axiosInstance.get(ApiUrl.employees);
		console.log("Response from an api - ", response.data.data);
		return response.data.data;
	} catch(e) {
		console.log("Api Error -", e);
	}
};

export {getEmployeeData}