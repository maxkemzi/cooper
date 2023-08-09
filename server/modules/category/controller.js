import {CategoryService} from "../../common/database";
import CategoryDto from "./dto";

class CategoryController {
	static async getAll(req, res, next) {
		try {
			const categories = await CategoryService.getAll();

			res.json(categories);
		} catch (e) {
			next(e);
		}
	}

	static async create(req, res, next) {
		try {
			const category = new CategoryDto(req.body);

			const createdCategory = await CategoryService.create(category);

			res.json(createdCategory);
		} catch (e) {
			next(e);
		}
	}
}

export default CategoryController;
