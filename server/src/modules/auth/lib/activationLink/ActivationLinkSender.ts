import {EmailSender} from "../../../../common/email";

class ActivationLinkSender {
	static async sendToEmail(link: string, email: string) {
		await EmailSender.sendActivation(
			email,
			`
		${process.env.API_URL}/users/activate/${link}
		`
		);
	}
}

export default ActivationLinkSender;
