import Category from "./model";
import {CategoryDocument, Category as ICategory} from "../types";

class CategoryDbService {
	static async getAll(): Promise<CategoryDocument[]> {
		const categories = await Category.find();
		return categories;
	}

	static async create(category: ICategory): Promise<CategoryDocument> {
		const createdCategory = await Category.create(category);
		return createdCategory;
	}
}

export default CategoryDbService;
