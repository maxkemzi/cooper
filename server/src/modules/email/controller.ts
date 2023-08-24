import {NextFunction, Response} from "express";
import {EmailSender} from "../../common/email";
import {CustomRequest} from "../../types";

class EmailController {
	static async sendContact(
		req: CustomRequest,
		res: Response,
		next: NextFunction
	) {
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
