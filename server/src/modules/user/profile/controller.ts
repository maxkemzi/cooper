import {NextFunction, Response} from "express";
import {UploadedFile} from "express-fileupload";
import {HeaderName} from "../../../common/constants";
import {
	ApiCalculator,
	GetManyParams,
	PaginationParams
} from "../../../common/lib";
import {CustomRequest} from "../../../types";
import ProfileService from "./service";

class ProfileController {
	static async update(req: CustomRequest, res: Response, next: NextFunction) {
		try {
			const id = req.user?.id;
			const {email, username, description, location} = req.body;

			const profile = await ProfileService.update(id, {
				email,
				username,
				description,
				location
			});

			res.json(profile);
		} catch (e) {
			next(e);
		}
	}

	static async getByUsername(
		req: CustomRequest,
		res: Response,
		next: NextFunction
	) {
		try {
			const {username} = req.params;

			const profile = await ProfileService.getByUsername(username);

			res.json(profile);
		} catch (e) {
			next(e);
		}
	}

	static async getProjectsByUsername(
		req: CustomRequest,
		res: Response,
		next: NextFunction
	) {
		try {
			const {username} = req.params;
			const {page, limit} = new PaginationParams(req.query);
			const {search, sort} = new GetManyParams(req.query);

			const offset = ApiCalculator.calcOffset(page, limit);

			const {data, totalCount} = await ProfileService.getProjectsByUsername(
				username,
				{search, limit, sort, offset}
			);

			const totalPages = ApiCalculator.calcTotalPages(totalCount, limit);

			res.set({
				[HeaderName.PAGE]: page,
				[HeaderName.TOTAL_COUNT]: totalCount,
				[HeaderName.TOTAL_PAGES]: totalPages
			});
			res.json(data);
		} catch (e) {
			next(e);
		}
	}

	static async uploadAvatar(
		req: CustomRequest,
		res: Response,
		next: NextFunction
	) {
		try {
			const id = req.user?.id;
			const file = req.files?.file as UploadedFile;

			const profile = await ProfileService.uploadAvatar(id, file);

			res.json(profile);
		} catch (e) {
			next(e);
		}
	}

	static async deleteAvatar(
		req: CustomRequest,
		res: Response,
		next: NextFunction
	) {
		try {
			const id = req.user?.id;

			const profile = await ProfileService.deleteAvatar(id);

			res.json(profile);
		} catch (e) {
			next(e);
		}
	}
}

export default ProfileController;
