import Category from "./model";

class CategoryDbService {
	static async getAll() {
		const categories = await Category.find();
		return categories;
	}

	static async create(category) {
		const createdCategory = await Category.create(category);
		return createdCategory;
	}
}

export default CategoryDbService;
