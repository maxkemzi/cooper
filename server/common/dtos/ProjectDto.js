class ProjectDto {
	constructor(data = {}) {
		const {
			id,
			creator,
			categories,
			title,
			description,
			workType,
			visibility,
			budget,
			createdDate
		} = data || {};
		this.id = id;
		this.creator = creator;
		this.categories = categories;
		this.title = title;
		this.description = description;
		this.workType = workType;
		this.budget = budget;
		this.visibility = visibility;
		this.createdDate = createdDate;
	}
}

export default ProjectDto;
