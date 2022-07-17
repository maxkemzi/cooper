import CategoriesAPI from "@api/categories/categories.api";
import {appActs} from "@store/app/app.slice";
import {categoriesActs} from "@store/categories/categories.slice";
import {AppDispatch} from "@store/index";

class CategoriesService {
	static fetchAll() {
		return async (dispatch: AppDispatch) => {
			dispatch(categoriesActs.setIsLoading(true));
			try {
				const response = await CategoriesAPI.fetchAll();
				dispatch(categoriesActs.setCategories(response.data));
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
				console.log(e.response?.data?.message);
			} finally {
				dispatch(categoriesActs.setIsLoading(false));
			}
		};
	}
}

export default CategoriesService;
