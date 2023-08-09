import Dto from "./Dto";

class CategoryDto extends Dto {
	constructor(document) {
		super(document);

		const {name} = document;

		this.name = name;
	}
}

export default CategoryDto;
