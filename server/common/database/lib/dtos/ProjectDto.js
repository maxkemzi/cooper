const Dto = require("./Dto");

class ProjectDto extends Dto {
	constructor(document) {
		super(document);

		const {creator, categories, title, description, workType, budget} =
			document || {};

		this.creator = creator;
		this.categories = categories;
		this.title = title;
		this.description = description;
		this.workType = workType;
		this.budget = budget;
	}
}

module.exports = ProjectDto;
