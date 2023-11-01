import axios from "axios";

export const apiUser = {
	getData: (id) => {
		return axios.get(`${process.env.REACT_APP_HOST}/api/${id}/view`).then((response) => {
			console.log(response);
		});
	},
};
