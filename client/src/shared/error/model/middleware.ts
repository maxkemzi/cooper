import {Middleware} from "@reduxjs/toolkit";
import {openErrorToast} from "@shared/toast";
import AppError from "../lib/AppError";

const errorMiddleware: Middleware = store => next => action => {
	const actionIsThunk = typeof action === "function";

	if (actionIsThunk) {
		return next(action)?.catch((e: Error | AppError) => {
			console.log(e);
			if (e instanceof AppError) {
				store.dispatch(openErrorToast(e.message));
			} else {
				store.dispatch(openErrorToast("Something went wrong."));
			}
		});
	}

	return next(action);
};

export default errorMiddleware;
