import {FilterQuery} from "mongoose";
import RegexEscaper from "../../lib/RegexEscaper";
import {ManyDataReturn, PaginationOptions} from "../../types";
import Project from "./model";
import {
	Project as IProject,
	ProjectDocument,
	ProjectPopulatedDocument
} from "../types";

class ProjectDbService {
	static async create(project: IProject): Promise<ProjectDocument> {
		const createdProject = await Project.create(project);
		return createdProject;
	}

	static async updateById(
		id: string,
		project: Partial<IProject>
	): Promise<ProjectDocument | null> {
		const updatedProject = await Project.findByIdAndUpdate(id, project, {
			new: true
		});
		return updatedProject;
	}

	static async deleteById(id: string): Promise<ProjectDocument | null> {
		const deletedProject = await Project.findByIdAndDelete(id);
		return deletedProject;
	}

	static async getAll(
		options: PaginationOptions
	): Promise<ManyDataReturn<ProjectDocument>> {
		const {data, totalCount} = await ProjectDbService.#getMany(
			{visibility: "public"},
			options
		);
		return {data, totalCount};
	}

	static async getByCreatorId(
		id: string,
		options: PaginationOptions
	): Promise<ManyDataReturn<ProjectDocument>> {
		const {data, totalCount} = await ProjectDbService.#getMany(
			{creator: id},
			options
		);
		return {data, totalCount};
	}

	static async #getMany(
		filter: FilterQuery<ProjectDocument>,
		{sort, limit, offset, search}: PaginationOptions
	): Promise<ManyDataReturn<ProjectDocument>> {
		const customFilter: FilterQuery<ProjectDocument> = {...filter};
		if (search) {
			const escapedSearch = RegexEscaper.escape(search);
			customFilter.$or = [
				{title: {$regex: escapedSearch, $options: "i"}},
				{description: {$regex: escapedSearch, $options: "i"}}
			];
		}

		let findQuery = Project.find(customFilter);
		if (sort) {
			findQuery = findQuery.sort({[sort]: -1});
		}
		if (offset) {
			findQuery = findQuery.skip(offset);
		}
		if (limit) {
			findQuery = findQuery.limit(limit);
		}

		const countQuery = Project.countDocuments(customFilter);

		const [data, totalCount] = await Promise.all([findQuery, countQuery]);
		return {data, totalCount};
	}

	static async getById(id: string): Promise<ProjectDocument | null> {
		const project = await Project.findById(id);
		return project;
	}

	static async exists(filter: FilterQuery<ProjectDocument>): Promise<boolean> {
		const exists = await Project.exists(filter);
		return exists;
	}

	static async populate(
		project: ProjectDocument
	): Promise<ProjectPopulatedDocument> {
		const populatedProject = await Project.populate(project, [
			{path: "creator", select: "username avatar location"},
			{path: "categories", select: "id name"}
		]);
		return populatedProject as ProjectPopulatedDocument;
	}

	static async populateMany(
		projects: ProjectDocument[]
	): Promise<ProjectPopulatedDocument[]> {
		const populatedProjects = await Project.populate(projects, [
			{path: "creator", select: "username avatar location"},
			{path: "categories", select: "id name"}
		]);
		return populatedProjects as ProjectPopulatedDocument[];
	}
}

export default ProjectDbService;
