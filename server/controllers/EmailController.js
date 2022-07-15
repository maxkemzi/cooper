const EmailService = require("../services/EmailService");

class EmailController {
	static async send(req, res, next) {
		try {
			const {name, email, text} = req.body;

			await EmailService.send({name, email, text});

			res.json({message: "Email has sent!"});
		} catch (e) {
			console.log(e);
			next(e);
		}
	}
}

module.exports = EmailController;
