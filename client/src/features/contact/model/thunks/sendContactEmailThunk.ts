import {openSuccessToast} from "@shared/toast";
import sendContactEmail from "../../api/sendContactEmail";
import {EmailContactDataToApi} from "../../api/types";

const sendContactEmailThunk =
	({email, name, text}: EmailContactDataToApi) =>
	async (dispatch: RootDispatch) => {
		await sendContactEmail({email, name, text});
		dispatch(openSuccessToast("Email has been sent."));
	};

export default sendContactEmailThunk;
