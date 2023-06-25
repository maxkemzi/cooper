const {UserService} = require("../../../common/database");
const {HeaderName} = require("../../../common/constants");

class FavoriteProjectController {
	static async getAll(req, res, next) {
		try {
			const {id} = req.user;

			let {page, limit, sort, search} = req.query;
			search = search || "";
			page = page || 1;
			limit = parseInt(limit, 10) || 10;
			sort = sort || "createdDate";
			const offset = page * limit - limit;

			const {projects, totalCount} = await UserService.getFavoriteProjectsById(
				id,
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

	static async add(req, res, next) {
		try {
			const {id} = req.user;
			const {projectId} = req.params;

			const user = await UserService.addFavoriteProject(id, projectId);

			res.json(user);
		} catch (e) {
			next(e);
		}
	}

	static async remove(req, res, next) {
		try {
			const {id} = req.user;
			const {projectId} = req.params;

			const user = await UserService.removeFavoriteProject(id, projectId);

			res.json(user);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = FavoriteProjectController;
