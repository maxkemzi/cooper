import {CategoryDbService, Category} from "../../common/database/services";
import {CategoryDto} from "../../common/dtos";

class CategoryService {
	static async getAll(): Promise<CategoryDto[]> {
		const categories = await CategoryDbService.getAll();
		return categories.map(c => new CategoryDto(c));
	}

	static async create(category: Category): Promise<CategoryDto> {
		const createdCategory = await CategoryDbService.create(category);
		return new CategoryDto(createdCategory);
	}
}

export default CategoryService;
