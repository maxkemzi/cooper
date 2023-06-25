class ProjectDto {
	constructor(data) {
		const {title, description, workType, categoryIds, visibility, budget} =
			data || {};

		this.title = title;
		this.description = description;
		this.workType = workType;
		this.categories = categoryIds;
		this.visibility = visibility;
		this.budget = budget;
	}
}

module.exports = ProjectDto;
