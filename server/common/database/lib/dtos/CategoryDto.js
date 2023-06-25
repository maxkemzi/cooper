const Dto = require("./Dto");

class CategoryDto extends Dto {
	constructor(document) {
		super(document);

		const {name} = document;

		this.name = name;
	}
}

module.exports = CategoryDto;
