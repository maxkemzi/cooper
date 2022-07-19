const {validationResult} = require("express-validator");
const ApiError = require("../exceptions/ApiError");
const ProjectsService = require("../services/ProjectsService");
const UsersService = require("../services/UsersService");

class ProjectsController {
	static async create(req, res, next) {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return next(ApiError.badRequest("Validation error!", errors.array()));
			}

			const project = await ProjectsService.create({
				...req.body,
				creator: req.user.id
			});

			await UsersService.updateOne(req.user.id, {$inc: {projectsCount: 1}});

			res.status(201).json(project);
		} catch (e) {
			console.log(e);
			next(e);
		}
	}

	static async updateOne(req, res, next) {
		try {
			const {id} = req.params;
			const project = await ProjectsService.updateOne(id, req.body);
			res.json(project);
		} catch (e) {
			next(e);
		}
	}

	static async deleteOne(req, res, next) {
		try {
			const project = await ProjectsService.deleteOne(
				req.params.id,
				req.user.id
			);
			res.json(project);
		} catch (e) {
			next(e);
		}
	}

	static async getAll(req, res, next) {
		try {
			let {page, limit, sort, search} = req.query;
			search = search || "";
			page = page || 1;
			limit = parseInt(limit, 10) || 10;
			sort = sort || "createdDate";
			const offset = page * limit - limit;
			const projects = await ProjectsService.getAll({
				sort,
				limit,
				offset,
				search
			});

			res.json(projects);
		} catch (e) {
			console.log(e);
			next(e);
		}
	}

	static async getOneById(req, res, next) {
		try {
			const {id} = req.params;
			const project = await ProjectsService.getOneById(id);

			res.json(project);
		} catch (e) {
			next(e);
		}
	}

	static async getByUsername(req, res, next) {
		try {
			let {page, limit, sort, search} = req.query;
			search = search || "";
			page = page || 1;
			limit = parseInt(limit, 10) || 10;
			sort = sort || "createdDate";
			const offset = page * limit - limit;
			const {username} = req.params;

			limit = parseInt(limit, 10) || 10;

			const projects = await ProjectsService.getByUsername(username, {
				limit,
				search,
				offset,
				sort
			});

			res.json(projects);
		} catch (e) {
			console.log(e);
			next(e);
		}
	}

	static async getByAuth(req, res, next) {
		try {
			let {page, limit, sort, search} = req.query;
			search = search || "";
			page = page || 1;
			limit = parseInt(limit, 10) || 10;
			sort = sort || "createdDate";
			const offset = page * limit - limit;
			const {username} = req.user;

			limit = parseInt(limit, 10) || 10;

			const projects = await ProjectsService.getByUsername(username, {
				limit,
				search,
				offset,
				sort
			});

			res.json(projects);
		} catch (e) {
			console.log(e);
			next(e);
		}
	}
}

module.exports = ProjectsController;
