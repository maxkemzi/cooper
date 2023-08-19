import {HeaderName} from "../../common/constants";
import {ApiCalculator, PaginationParams, GetManyParams} from "../../common/lib";
import ProjectService from "./service";

class ProjectController {
	static async create(req, res, next) {
		try {
			const {title, description, workType, categoryIds, visibility, budget} =
				req.body;
			const creator = req.user.id;

			const project = await ProjectService.create({
				title,
				description,
				workType,
				categoryIds,
				visibility,
				budget,
				creator
			});

			res.status(201).json(project);
		} catch (e) {
			next(e);
		}
	}

	static async updateById(req, res, next) {
		try {
			const {id} = req.params;
			const {title, description, workType, categoryIds, visibility, budget} =
				req.body;

			const project = await ProjectService.updateById(id, {
				title,
				description,
				workType,
				categoryIds,
				visibility,
				budget
			});

			res.json(project);
		} catch (e) {
			next(e);
		}
	}

	static async deleteById(req, res, next) {
		try {
			const {id} = req.params;

			const project = await ProjectService.deleteById(id);

			res.json(project);
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
