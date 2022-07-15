import axios from "axios";

class EmailAPI {
	static async send(values: any) {
		return axios.post(`${process.env.API_URL}api/email`, values);
	}
}

export default EmailAPI;
