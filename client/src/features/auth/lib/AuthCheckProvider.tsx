import {useTypedDispatch, useTypedSelector} from "@shared/model";
import {Loader, LoaderWrapper} from "@shared/ui";
import {FC, PropsWithChildren, useEffect} from "react";
import {selectAuthIsFetching} from "../model/selectors";
import {setIsFetching} from "../model/slice";
import refreshThunk from "../model/thunks/refreshThunk";

const AuthCheckProvider: FC<PropsWithChildren> = ({children}) => {
	const dispatch = useTypedDispatch();
	const isFetching = useTypedSelector(selectAuthIsFetching);

	useEffect(() => {
		const tokenExists = !!localStorage.getItem("token");
		if (tokenExists) {
			dispatch(refreshThunk());
		} else {
			dispatch(setIsFetching(false));
		}
	}, [dispatch]);

	if (isFetching) {
		return (
			<LoaderWrapper>
				<Loader />
			</LoaderWrapper>
		);
	}

	return <>{children}</>;
};

export default AuthCheckProvider;
