class CategoryDto {
	constructor(data) {
		const {name} = data || {};

		this.name = name;
	}
}

module.exports = CategoryDto;
