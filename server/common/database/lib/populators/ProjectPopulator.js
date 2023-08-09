import Populator from "./Populator";

class ProjectPopulator extends Populator {
	static populateOptions = [
		{path: "creator", select: "username avatar location"},
		{path: "categories", select: "id name"}
	];

	static async populate(project) {
		return super.populate(project, this.populateOptions);
	}

	static populateQuery(query) {
		return super.populateQuery(query, this.populateOptions);
	}
}

export default ProjectPopulator;
