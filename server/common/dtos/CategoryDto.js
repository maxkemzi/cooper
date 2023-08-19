class CategoryDto {
	constructor(data = {}) {
		const {id, name} = data || {};

		this.id = id;
		this.name = name;
	}
}

export default CategoryDto;
