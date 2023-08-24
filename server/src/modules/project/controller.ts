import {NextFunction, Response} from "express";
import {HeaderName} from "../../common/constants";
import {ApiCalculator, GetManyParams, PaginationParams} from "../../common/lib";
import {CustomRequest} from "../../types";
import ProjectService from "./service";

class ProjectController {
	static async create(req: CustomRequest, res: Response, next: NextFunction) {
		try {
			const creator = req.user?.id;
			const {categoryIds, title, description, workType, visibility, budget} =
				req.body;

			const project = await ProjectService.create({
				creator,
				categories: categoryIds,
				title,
				description,
				workType,
				visibility,
				budget
			});

			res.status(201).json(project);
		} catch (e) {
			next(e);
		}
	}

	static async updateById(
		req: CustomRequest,
		res: Response,
		next: NextFunction
	) {
		try {
			const {id} = req.params;
			const {categoryIds, title, description, workType, visibility, budget} =
				req.body;

			const project = await ProjectService.updateById(id, {
				categories: categoryIds,
				title,
				description,
				workType,
				visibility,
				budget
			});

			res.json(project);
		} catch (e) {
			next(e);
		}
	}

	static async deleteById(
		req: CustomRequest,
		res: Response,
		next: NextFunction
	) {
		try {
			const {id} = req.params;

			const project = await ProjectService.deleteById(id);

			res.json(project);
		} catch (e) {
			next(e);
		}
	}

	static async getAll(req: CustomRequest, res: Response, next: NextFunction) {
		try {
			const {page, limit} = new PaginationParams(req.query);
			const {search, sort} = new GetManyParams(req.query);
			const offset = ApiCalculator.calcOffset(page, limit);

			const {data, totalCount} = await ProjectService.getAll({
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
			res.json(data);
		} catch (e) {
			next(e);
		}
	}

	static async getById(req: CustomRequest, res: Response, next: NextFunction) {
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
