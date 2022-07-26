const Project = require("../models/Project");
const ApiError = require("../exceptions/ApiError");
const User = require("../models/User");
const {getQueryLookups, getQueryStructure} = require("../queries/projects");

class ProjectsService {
	static async create(project) {
		const createdProject = await Project.create(project);

		return createdProject;
	}

	static async updateOne(id, project) {
		const updatedProject = await Project.findByIdAndUpdate(id, project, {
			new: true
		})
			.populate("creator", {_id: 0, avatar: 1, username: 1})
			.populate("categories");

		return updatedProject;
	}

	static async deleteOne(projectId, userId) {
		const userProjects = await Project.find({user: userId});
		const isProject = userProjects.some(project => project.id === projectId);

		if (!isProject) {
			throw ApiError.badRequest("You can only delete your own themes!");
		}

		const [project] = await Promise.all([
			Project.findByIdAndDelete(projectId),
			User.updateMany(
				{favorites: {$in: [projectId]}},
				{$pull: {favorites: projectId}}
			)
		]);

		return project;
	}

	static async getAll({sort, limit, offset, search}) {
		const projects = await Project.aggregate([
			{
				$match: {
					visibility: "public",
					$or: [{title: {$regex: search}}, {description: {$regex: search}}]
				}
			},
			{$sort: {[sort]: -1}},
			...getQueryLookups(),
			...getQueryStructure(limit, offset)
		]);

		return projects[0];
	}

	static async getById(id) {
		const project = await Project.findById(id)
			.populate("creator", ["createdDate", "projectsCount"])
			.populate("categories");

		return project;
	}

	static async getByUsername(username, {limit, sort, offset, search}) {
		const projects = await Project.aggregate([
			{
				$match: {
					$or: [{title: {$regex: search}}, {description: {$regex: search}}]
				}
			},
			{$sort: {[sort]: -1}},
			...getQueryLookups(),
			{$match: {"creator.username": username}},
			...getQueryStructure(limit, offset)
		]);

		return projects[0];
	}

	static async getFavorites(username, {limit, sort, offset, search}) {
		const projects = await User.aggregate([
			{
				$match: {username}
			},
			{
				$lookup: {
					from: "projects",
					localField: "favorites",
					foreignField: "_id",
					pipeline: [
						{
							$match: {
								$or: [
									{title: {$regex: search}},
									{description: {$regex: search}}
								]
							}
						},
						{$sort: {[sort]: -1}},
						...getQueryLookups()
					],
					as: "favorites"
				}
			},
			{
				$facet: {
					projects: [{$unwind: "$favorites"}, {$limit: limit}, {$skip: offset}],
					totalCount: [
						{$unwind: "$favorites"},
						{
							$count: "totalCount"
						}
					]
				}
			},
			{
				$addFields: {
					projects: "$projects.favorites",
					totalCount: {
						$ifNull: [{$arrayElemAt: ["$totalCount.totalCount", 0]}, 0]
					}
				}
			}
		]);

		return projects[0];
	}
}

module.exports = ProjectsService;
