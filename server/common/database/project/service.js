const Project = require("./model");
const ProjectDto = require("../lib/dtos/ProjectDto");
const ProjectPopulator = require("../lib/populators/ProjectPopulator");
const RegexEscaper = require("../lib/RegexEscaper");

class ProjectService {
	static async create(project) {
		const createdProject = await Project.create(project);

		const populatedCreatedProject = await ProjectPopulator.populate(
			createdProject
		);

		return ProjectDto.fromDocument(populatedCreatedProject);
	}

	static async updateById(id, project) {
		const updatedProject = await ProjectPopulator.populateQuery(
			Project.findByIdAndUpdate(id, project, {
				new: true
			})
		);

		return ProjectDto.fromDocument(updatedProject);
	}

	static async deleteById(id) {
		const deletedProject = await ProjectPopulator.populateQuery(
			Project.findByIdAndDelete(id)
		);

		return ProjectDto.fromDocument(deletedProject);
	}

	static async getAll({sort, limit, offset, search}) {
		const query = {visibility: "public"};

		const escapedSearch = RegexEscaper.escape(search);

		if (search) {
			query.$or = [
				{title: {$regex: escapedSearch, $options: "i"}},
				{description: {$regex: escapedSearch, $options: "i"}}
			];
		}

		const findQuery = ProjectPopulator.populateQuery(
			Project.find(query)
				.sort({[sort]: -1})
				.skip(offset)
				.limit(limit)
		);

		const countQuery = Project.countDocuments(query);

		const [projects, totalCount] = await Promise.all([findQuery, countQuery]);

		return {projects: ProjectDto.fromDocuments(projects), totalCount};
	}

	static async getByCreatorId(id, {sort, limit, offset, search}) {
		const query = {creator: id};

		const escapedSearch = RegexEscaper.escape(search);

		if (search) {
			query.$or = [
				{title: {$regex: escapedSearch, $options: "i"}},
				{description: {$regex: escapedSearch, $options: "i"}}
			];
		}

		const findQuery = ProjectPopulator.populateQuery(
			Project.find(query)
				.sort({[sort]: -1})
				.skip(offset)
				.limit(limit)
		);

		const countQuery = Project.countDocuments(query);

		const [projects, totalCount] = await Promise.all([findQuery, countQuery]);

		return {projects: ProjectDto.fromDocuments(projects), totalCount};
	}

	static async getById(id) {
		const project = await ProjectPopulator.populateQuery(Project.findById(id));

		return ProjectDto.fromDocument(project);
	}
}

module.exports = ProjectService;
