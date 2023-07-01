import {GetMultipleReqParams} from "../../api/types";

const ERROR_MESSAGE = "Error occurred. Try reloading the page.";

const DEFAULT_PARAMS: GetMultipleReqParams = {
	page: 1,
	limit: 6,
	search: "",
	sort: ""
};

export {ERROR_MESSAGE, DEFAULT_PARAMS};
