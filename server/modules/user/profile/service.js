import {ProjectService, UserService} from "../../../common/database";
import {ErrorThrower} from "../../../common/error";
import {FileManager} from "../../../common/file";
import UserToProfileDto from "./lib/UserToProfileDTO";

class ProfileService {
	static async updateById(id, profile) {
		const user = await UserService.updateById(id, profile);

		return new UserToProfileDto(user);
	}

	static async getByUsername(username) {
		const userDoesNotExist = !(await UserService.exists({username}));

		if (userDoesNotExist) {
			ErrorThrower.throwBadRequest(
				`A user with a username of ${username} doesn't exist.`
			);
		}

		const user = await UserService.getByUsername(username);

		return new UserToProfileDto(user);
	}

	static async getProjectsByUsername(username, {search, limit, sort, offset}) {
		const user = await UserService.getByUsername(username);

		const {projects, totalCount} = await ProjectService.getByCreatorId(
			user.id,
			{search, limit, sort, offset}
		);

		return {
			projects: projects.map(project => ({
				...project,
				creator: new UserToProfileDto(project.creator)
			})),
			totalCount
		};
	}

	static async uploadAvatar(userId, file) {
		const fileName = FileManager.generateNameWithExt(".jpg");
		await FileManager.save(file, fileName);

		const updatedUser = await UserService.updateById(userId, {
			avatar: fileName
		});

		return new UserToProfileDto(updatedUser);
	}

	static async deleteAvatar(userId) {
		const user = await UserService.getById(userId);

		await FileManager.delete(user.avatar);

		const updatedUser = await UserService.updateById(userId, {avatar: null});

		return new UserToProfileDto(updatedUser);
	}
}

export default ProfileService;
