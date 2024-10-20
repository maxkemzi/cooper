import {NextFunction, Response} from "express";
import {HeaderName} from "../../common/constants";
import {ApiCalculator, GetManyParams, PaginationParams} from "../../common/lib";
import {CustomRequest} from "../../types";
import UserService from "./service";

class UserController {
	static async activate(req: CustomRequest, res: Response, next: NextFunction) {
		try {
			const activationLink = req.params.link;

			await UserService.activate(activationLink);

			res.redirect(process.env.PUBLIC_CLIENT_URL as string);
		} catch (e) {
			next(e);
		}
	}

	static async delete(req: CustomRequest, res: Response, next: NextFunction) {
		try {
			const id = req.user?.id;

			const user = await UserService.delete(id);

			res.json(user);
		} catch (e) {
			next(e);
		}
	}

	static async getProjects(
		req: CustomRequest,
		res: Response,
		next: NextFunction
	) {
		try {
			const id = req.user?.id;
			const {limit, page} = new PaginationParams(req.query);
			const {search, sort} = new GetManyParams(req.query);
			const offset = ApiCalculator.calcOffset(page, limit);

			const {data, totalCount} = await UserService.getProjects(id, {
				limit,
				offset,
				sort,
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
}

export default UserController;
