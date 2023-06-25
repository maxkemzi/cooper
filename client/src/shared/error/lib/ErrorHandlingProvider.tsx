import {useTypedSelector} from "@shared/model";
import {useErrorToast} from "@shared/toast";
import {FC, PropsWithChildren, useEffect} from "react";
import {selectErrorMessage, selectHasError} from "../model/selectors";

const ErrorHandlingProvider: FC<PropsWithChildren> = ({children}) => {
	const {openErrorToast} = useErrorToast();
	const errorMessage = useTypedSelector(selectErrorMessage);
	const hasError = useTypedSelector(selectHasError);

	useEffect(() => {
		if (hasError && errorMessage !== null) {
			openErrorToast(errorMessage);
		}
	}, [errorMessage, hasError, openErrorToast]);

	return <>{children}</>;
};

export default ErrorHandlingProvider;
