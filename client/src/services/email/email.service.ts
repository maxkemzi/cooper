import EmailAPI from "@api/email/email.api";
import {appActs} from "@store/app/app.slice";
import {AppDispatch} from "@store/index";

class EmailService {
	static send(values: any) {
		return async (dispatch: AppDispatch) => {
			try {
				await EmailAPI.send(values);
				dispatch(
					appActs.setNotification({
						type: "success",
						text: "Email has been sent."
					})
				);
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
			}
		};
	}
}

export default EmailService;
