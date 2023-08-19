import CategoryService from "./service";

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
			const {name} = req.body;

			const category = await CategoryService.create({name});

			res.json(category);
		} catch (e) {
			next(e);
		}
	}
}

export default CategoryController;
