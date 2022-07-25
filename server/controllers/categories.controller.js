const CategoriesService = require("../services/categories.service");

class CategoriesController {
	static async getAll(req, res, next) {
		try {
			const categories = await CategoriesService.getAll();
			res.json(categories);
		} catch (e) {
			console.log(e);
			next(e);
		}
	}
}

module.exports = CategoriesController;
