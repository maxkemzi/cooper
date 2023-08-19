import {FileManager} from "../../../common/file";
import {
	ProjectDbService,
	UserDbService
} from "../../../common/database/services";
import {ErrorThrower} from "../../../common/error";
import {ProjectDto, UserProfileDto} from "../../../common/dtos";

class ProfileService {
	static async update(id, profile) {
		const user = await UserDbService.getById(id);
		if (user == null) {
			ErrorThrower.throwBadRequest(`User with provided id doesn't exist.`);
		}

		const updatedUser = await UserDbService.updateById(id, profile);
		return new UserProfileDto(updatedUser);
	}

	static async getByUsername(username) {
		const user = await UserDbService.getByUsername(username);
		if (user == null) {
			ErrorThrower.throwBadRequest(
				`User with a username of ${username} doesn't exist.`
			);
		}

		return new UserProfileDto(user);
	}

	static async getProjectsByUsername(username, {search, limit, sort, offset}) {
		const user = await UserDbService.getByUsername(username);
		if (user == null) {
			ErrorThrower.throwBadRequest(
				`User with a username of ${username} doesn't exist.`
			);
		}

		const {projects, totalCount} = await ProjectDbService.getByCreatorId(
			user.id,
			{search, limit, sort, offset}
		);
		return {projects: projects.map(p => new ProjectDto(p)), totalCount};
	}

	static async uploadAvatar(userId, file) {
		const user = await UserDbService.getById(userId);
		if (user == null) {
			ErrorThrower.throwBadRequest(`User with provided id doesn't exist.`);
		}

		const fileName = FileManager.generateNameWithExt(".jpg");
		const updatedUser = await UserDbService.updateById(userId, {
			avatar: fileName
		});
		await FileManager.save(file, fileName);

		return new UserProfileDto(updatedUser);
	}

	static async deleteAvatar(userId) {
		const user = await UserDbService.getById(userId);
		if (user == null) {
			ErrorThrower.throwBadRequest(`User with provided id doesn't exist.`);
		}

		const updatedUser = await UserDbService.updateById(userId, {avatar: null});
		await FileManager.delete(user.avatar);

		return new UserProfileDto(updatedUser);
	}
}

export default ProfileService;
