const Category = require("../models/Category");

class CategoriesService {
	static async getAll() {
		const categories = await Category.find();
		return categories;
	}
}

module.exports = CategoriesService;
