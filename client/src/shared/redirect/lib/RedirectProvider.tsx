import {useTypedDispatch, useTypedSelector} from "@shared/model";
import {FC, useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {selectRedirectPath} from "../model/selectors";
import {completeRedirect} from "../model/slice";

const RedirectProvider: FC = () => {
	const dispatch = useTypedDispatch();
	const path = useTypedSelector(selectRedirectPath);
	const navigate = useNavigate();

	useEffect(() => {
		if (path) {
			dispatch(completeRedirect());
			navigate(path);
		}
	}, [dispatch, navigate, path]);

	return <Outlet />;
};

export default RedirectProvider;
