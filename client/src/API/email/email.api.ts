import EmailResponse from "@customTypes/apis/email";
import axios, {AxiosResponse} from "axios";

class EmailAPI {
	static async send(values: any): Promise<AxiosResponse<EmailResponse>> {
		return axios.post<EmailResponse>(`${process.env.API_URL}api/email`, values);
	}
}

export default EmailAPI;
