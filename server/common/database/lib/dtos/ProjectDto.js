import Dto from "./Dto";

class ProjectDto extends Dto {
	constructor(document) {
		super(document);

		const {
			creator,
			categories,
			title,
			description,
			workType,
			visibility,
			budget
		} = document || {};

		this.creator = creator;
		this.categories = categories;
		this.title = title;
		this.description = description;
		this.workType = workType;
		this.budget = budget;
		this.visibility = visibility;
	}
}

export default ProjectDto;
