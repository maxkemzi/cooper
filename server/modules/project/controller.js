const {ProjectService} = require("../../common/database");
const ProjectDto = require("./dto");
const {HeaderName} = require("../../common/constants");

class ProjectController {
	static async create(req, res, next) {
		try {
			const project = new ProjectDto(req.body);
			const creator = req.user.id;

			const createdProject = await ProjectService.create({
				...project,
				creator
			});

			res.status(201).json(createdProject);
		} catch (e) {
			next(e);
		}
	}

	static async updateById(req, res, next) {
		try {
			const {id} = req.params;
			const project = new ProjectDto(req.body);

			const updatedProject = await ProjectService.updateById(id, project);

			res.json(updatedProject);
		} catch (e) {
			next(e);
		}
	}

	static async deleteById(req, res, next) {
		try {
			const {id} = req.params;

			const deletedProject = await ProjectService.deleteById(id);

			res.json(deletedProject);
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

			const {projects, totalCount} = await ProjectService.getAll({
				sort,
				limit,
				offset,
				search
			});

			res.setHeader(HeaderName.TOTAL_COUNT, totalCount);
			res.json(projects);
		} catch (e) {
			next(e);
		}
	}

	static async getById(req, res, next) {
		try {
			const {id} = req.params;

			const project = await ProjectService.getById(id);

			res.json(project);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = ProjectController;
