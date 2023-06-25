const {UserService, ProjectService} = require("../../common/database");
const {HeaderName} = require("../../common/constants");

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

	static async getProjects(req, res, next) {
		try {
			let {page, limit, sort, search} = req.query;
			search = search || "";
			page = page || 1;
			limit = parseInt(limit, 10) || 10;
			sort = sort || "createdDate";
			const offset = page * limit - limit;

			const {projects, totalCount} = await ProjectService.getByCreatorId(
				req.user.id,
				{
					limit,
					offset,
					sort,
					search
				}
			);

			res.setHeader(HeaderName.TOTAL_COUNT, totalCount);
			res.json(projects);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = UserController;
