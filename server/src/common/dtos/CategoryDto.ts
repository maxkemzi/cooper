import {Category, CategoryDocument} from "../database/services";

class CategoryDto {
	id: CategoryDocument["id"];
	name: Category["name"];

	constructor(data: CategoryDocument) {
		this.id = data.id;
		this.name = data.name;
	}
}

export default CategoryDto;
