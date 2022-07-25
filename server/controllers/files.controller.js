const uuid = require("uuid");
const fs = require("fs");
const UsersService = require("../services/users.service");

class FilesController {
	static async uploadAvatar(req, res, next) {
		try {
			const {file} = req.files;
			const user = await UsersService.getOneById(req.user.id);

			const avatarName = `${uuid.v4()}.jpg`;
			await file.mv(`${process.env.STATIC_PATH}\\${avatarName}`);
			user.avatar = avatarName;
			await user.save();

			res.json(user);
		} catch (e) {
			next(e);
		}
	}

	static async deleteAvatar(req, res, next) {
		try {
			const user = await UsersService.getOneById(req.user.id);
			fs.unlinkSync(`${process.env.STATIC_PATH}\\${user.avatar}`);
			user.avatar = "";

			await user.save();

			res.json(user);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = FilesController;
