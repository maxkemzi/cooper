const {validationResult} = require("express-validator");
const ApiError = require("../exceptions/ApiError");
const UsersService = require("../services/users.service");

class UsersController {
	static async activate(req, res, next) {
		try {
			const activationLink = req.params.link;
			await UsersService.activate(activationLink);
			res.redirect(process.env.CLIENT_URL);
		} catch (e) {
			next(e);
		}
	}

	static async getAll(req, res, next) {
		try {
			const users = await UsersService.getAll();
			res.json(users);
		} catch (e) {
			next(e);
		}
	}

	static async getOneByUsername(req, res, next) {
		try {
			const username = req.params.username || req.user.username;
			const user = await UsersService.getOneByUsername(username);
			res.json(user);
		} catch (e) {
			next(e);
		}
	}

	static async updateOne(req, res, next) {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return next(ApiError.badRequest("Validation error!", errors.array()));
			}

			const user = await UsersService.updateOne(req.user.id, req.body);
			res.json(user);
		} catch (e) {
			next(e);
		}
	}

	static async saveProject(req, res, next) {
		try {
			const user = await UsersService.saveProject(
				req.params.projectId,
				req.user.id
			);
			res.json(user);
		} catch (e) {
			next(e);
		}
	}

	static async unsaveProject(req, res, next) {
		try {
			const user = await UsersService.unsaveProject(
				req.params.projectId,
				req.user.id
			);
			res.json(user);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = UsersController;
