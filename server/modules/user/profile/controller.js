import ProfileService from "./service";
import ProfileDto from "./dto";
import {HeaderName} from "../../../common/constants";
import {
	PaginationParams,
	GetManyParams,
	ApiCalculator
} from "../../../common/lib";

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

			const {page, limit} = new PaginationParams(req.query);
			const {search, sort} = new GetManyParams(req.query);

			const offset = ApiCalculator.calcOffset(page, limit);

			const {projects, totalCount} = await ProfileService.getProjectsByUsername(
				username,
				{search, limit, sort, offset}
			);

			const totalPages = ApiCalculator.calcTotalPages(totalCount, limit);

			res.set({
				[HeaderName.PAGE]: page,
				[HeaderName.TOTAL_COUNT]: totalCount,
				[HeaderName.TOTAL_PAGES]: totalPages
			});
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

export default ProfileController;
