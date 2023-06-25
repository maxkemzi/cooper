import {setError} from "@shared/error";
import fetchCategories from "../../api/fetchCategories";
import {setCategories, setIsFetching} from "../slice";

const fetchCategoriesThunk = () => async (dispatch: RootDispatch) => {
	dispatch(setIsFetching(true));
	try {
		const response = await fetchCategories();
		dispatch(setCategories(response.data));
	} catch (e) {
		dispatch(setError());
	} finally {
		dispatch(setIsFetching(false));
	}
};

export default fetchCategoriesThunk;
