const Populator = require("./Populator");

class ProjectPopulator extends Populator {
	static populateOptions = [
		{path: "creator", select: "username avatar"},
		{path: "categories", select: "id name"}
	];

	static async populate(project) {
		return super.populate(project, this.populateOptions);
	}

	static populateQuery(query) {
		return super.populateQuery(query, this.populateOptions);
	}
}

module.exports = ProjectPopulator;
