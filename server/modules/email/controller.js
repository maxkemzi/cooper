import {EmailSender} from "../../common/email";

class EmailController {
	static async sendContact(req, res, next) {
		try {
			const {name, email, text} = req.body;

			await EmailSender.sendContact({name, email, text});

			res.json({success: true});
		} catch (e) {
			next(e);
		}
	}
}

export default EmailController;
