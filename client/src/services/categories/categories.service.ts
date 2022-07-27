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
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
			} finally {
				dispatch(categoriesActs.setIsLoading(false));
			}
		};
	}
}

export default CategoriesService;
