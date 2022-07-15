import EmailAPI from "@api/email/email.api";
import {appActs} from "@store/app/app.slice";
import {AppDispatch} from "@store/index";

class EmailService {
	static send(values: any) {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await EmailAPI.send(values);
				console.log(response);
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
				console.log(e.response?.data?.message);
			}
		};
	}
}

export default EmailService;
