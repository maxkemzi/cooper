const {EmailSender} = require("../../../../common/email");

class ActivationLinkSender {
	static async sendToEmail(link, email) {
		await EmailSender.sendActivation(
			email,
			`
		${process.env.API_URL}/users/activate/${link}
		`
		);
	}
}

module.exports = ActivationLinkSender;
