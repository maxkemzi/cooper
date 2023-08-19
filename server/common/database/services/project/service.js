import Project from "./model";
import {ProjectPopulator} from "../../populators";
import RegexEscaper from "../../lib/RegexEscaper";

class ProjectDbService {
	static async create(project) {
		const createdProject = await Project.create(project);

		const populatedCreatedProject = await ProjectPopulator.populate(
			createdProject
		);
		return populatedCreatedProject;
	}

	static async updateById(id, project) {
		const updatedProject = await ProjectPopulator.populateQuery(
			Project.findByIdAndUpdate(id, project, {
				new: true
			})
		);
		return updatedProject;
	}

	static async deleteById(id) {
		const deletedProject = await ProjectPopulator.populateQuery(
			Project.findByIdAndDelete(id)
		);
		return deletedProject;
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
		return {projects, totalCount};
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
		return {projects, totalCount};
	}

	static async getById(id) {
		const project = await ProjectPopulator.populateQuery(Project.findById(id));
		return project;
	}
}

export default ProjectDbService;
