const {EmailSender} = require("../../../../common/email");

class ActivationLinkSender {
	static async sendToEmail(link, email) {
		await EmailSender.sendActivation(
			email,
			`
		${process.env.API_URL}/api/users/activate/${link}
		`
		);
	}
}

module.exports = ActivationLinkSender;
