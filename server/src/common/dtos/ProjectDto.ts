import {Project, ProjectDocument} from "../database/services";

class ProjectDto {
	id: ProjectDocument["id"];
	creator: Project["creator"];
	categories: Project["categories"];
	title: Project["title"];
	description: Project["description"];
	workType: Project["workType"];
	budget: Project["budget"];
	visibility: Project["visibility"];
	createdDate: Project["createdDate"];

	constructor(data: ProjectDocument) {
		this.id = data.id;
		this.creator = data.creator;
		this.categories = data.categories;
		this.title = data.title;
		this.description = data.description;
		this.workType = data.workType;
		this.budget = data.budget;
		this.visibility = data.visibility;
		this.createdDate = data.createdDate;
	}
}

export default ProjectDto;
