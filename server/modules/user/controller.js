import {UserService, ProjectService} from "../../common/database";
import {HeaderName} from "../../common/constants";
import {PaginationParams, GetManyParams, ApiCalculator} from "../../common/lib";

class UserController {
	static async activate(req, res, next) {
		try {
			const activationLink = req.params.link;

			await UserService.activate(activationLink);

			res.redirect(process.env.CLIENT_URL);
		} catch (e) {
			next(e);
		}
	}

	static async deleteById(req, res, next) {
		try {
			const {id} = req.user;

			const user = await UserService.deleteById(id);

			res.json(user);
		} catch (e) {
			next(e);
		}
	}

	static async getProjects(req, res, next) {
		try {
			const {limit, page} = new PaginationParams(req.query);
			const {search, sort} = new GetManyParams(req.query);

			const offset = ApiCalculator.calcOffset(page, limit);

			const {projects, totalCount} = await ProjectService.getByCreatorId(
				req.user.id,
				{
					limit,
					offset,
					sort,
					search
				}
			);

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
}

export default UserController;
