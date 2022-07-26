const {validationResult} = require("express-validator");
const ApiError = require("../exceptions/ApiError");
const EmailService = require("../services/email.service");

class EmailController {
	static async send(req, res, next) {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return next(ApiError.badRequest("Validation error!", errors.array()));
			}

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
