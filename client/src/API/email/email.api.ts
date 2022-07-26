import $api from "@axios/index";
import EmailResponse from "@customTypes/apis/email";
import {AxiosResponse} from "axios";

class EmailAPI {
	static async send(values: any): Promise<AxiosResponse<EmailResponse>> {
		return $api.post<EmailResponse>(`${process.env.API_URL}api/email`, values);
	}
}

export default EmailAPI;
