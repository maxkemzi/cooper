const ProfileService = require("./service");
const ProfileDto = require("./dto");
const {HeaderName} = require("../../../common/constants");

class ProfileController {
	static async updateById(req, res, next) {
		try {
			const {id} = req.user;
			const profile = new ProfileDto(req.body);

			const updatedProfile = await ProfileService.updateById(id, profile);

			res.json(updatedProfile);
		} catch (e) {
			next(e);
		}
	}

	static async getByUsername(req, res, next) {
		try {
			const {username} = req.params;

			const profile = await ProfileService.getByUsername(username);

			res.json(profile);
		} catch (e) {
			next(e);
		}
	}

	static async getProjectsByUsername(req, res, next) {
		try {
			const {username} = req.params;

			const {projects, totalCount} = await ProfileService.getProjectsByUsername(
				username
			);

			res.setHeader(HeaderName.TOTAL_COUNT, totalCount);
			res.json(projects);
		} catch (e) {
			next(e);
		}
	}

	static async uploadAvatar(req, res, next) {
		try {
			const {id} = req.user;
			const {file} = req.files;

			const profile = await ProfileService.uploadAvatar(id, file);

			res.json(profile);
		} catch (e) {
			next(e);
		}
	}

	static async deleteAvatar(req, res, next) {
		try {
			const {id} = req.user;

			const profile = await ProfileService.deleteAvatar(id);

			res.json(profile);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = ProfileController;
