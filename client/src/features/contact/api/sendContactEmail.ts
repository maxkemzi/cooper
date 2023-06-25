import $api from "@shared/api";
import {
	EmailContactDataToApi,
	EmailSuccessRes,
	EmailSuccessResFromApi
} from "./types";

const sendContactEmail = ({
	email,
	name,
	text
}: EmailContactDataToApi): Promise<EmailSuccessRes> =>
	$api.post<EmailSuccessResFromApi>("/email/contact", {
		email,
		name,
		text
	});

export default sendContactEmail;
