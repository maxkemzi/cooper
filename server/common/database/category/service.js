import Category from "./model";
import CategoryDto from "../lib/dtos/CategoryDto";

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

export default CategoryService;
