import {ProjectService} from "../../common/database";
import ProjectDto from "./dto";
import {HeaderName} from "../../common/constants";
import {ApiCalculator, PaginationParams, GetManyParams} from "../../common/lib";

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
			const {page, limit} = new PaginationParams(req.query);
			const {search, sort} = new GetManyParams(req.query);

			const offset = ApiCalculator.calcOffset(page, limit);

			const {projects, totalCount} = await ProjectService.getAll({
				sort,
				limit,
				offset,
				search
			});

			const totalPages = ApiCalculator.calcTotalPages(totalCount, limit);

			res.set({
				[HeaderName.TOTAL_PAGES]: totalPages,
				[HeaderName.PAGE]: page,
				[HeaderName.TOTAL_COUNT]: totalCount
			});
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

export default ProjectController;
