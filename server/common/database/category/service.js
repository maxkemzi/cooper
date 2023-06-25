const Category = require("./model");
const CategoryDto = require("../lib/dtos/CategoryDto");

class CategoryService {
	static async getAll() {
		const categories = await Category.find();

		return CategoryDto.fromDocuments(categories);
	}

	static async create(category) {
		const createdCategory = await Category.create(category);

		return CategoryDto.fromDocument(createdCategory);
	}
}

module.exports = CategoryService;
