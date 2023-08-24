import {UploadedFile} from "express-fileupload";
import {
	ProjectDbService,
	UserDbService
} from "../../../common/database/services";
import {
	ManyDataReturn,
	PaginationOptions
} from "../../../common/database/types";
import {ProjectDto, ProfileDto} from "../../../common/dtos";
import {ErrorThrower} from "../../../common/error";
import {FileManager} from "../../../common/file";
import {Profile} from "./types";

class ProfileService {
	static async update(
		id: string,
		profile: Partial<Profile>
	): Promise<ProfileDto | never> {
		const exists = await UserDbService.exists({id});
		if (!exists) {
			ErrorThrower.throwBadRequest("User with provided id doesn't exist.");
		}

		const user = (await UserDbService.updateById(id, profile))!;

		return new ProfileDto(user);
	}

	static async getByUsername(
		username: NonNullable<Profile["username"]>
	): Promise<ProfileDto | never> {
		const exists = await UserDbService.exists({username});
		if (!exists) {
			ErrorThrower.throwBadRequest(
				`User with username of ${username} doesn't exist.`
			);
		}

		const user = (await UserDbService.getByUsername(username))!;

		return new ProfileDto(user);
	}

	static async getProjectsByUsername(
		username: NonNullable<Profile["username"]>,
		{search, limit, sort, offset}: PaginationOptions
	): Promise<ManyDataReturn<ProjectDto> | never> {
		const exists = await UserDbService.exists({username});
		if (!exists) {
			ErrorThrower.throwBadRequest(
				`User with username of ${username} doesn't exist.`
			);
		}

		const user = (await UserDbService.getByUsername(username))!;
		const {data, totalCount} = await ProjectDbService.getByCreatorId(user.id, {
			search,
			limit,
			sort,
			offset
		});
		const populatedData = await ProjectDbService.populateMany(data);

		return {data: populatedData.map(p => new ProjectDto(p)), totalCount};
	}

	static async uploadAvatar(
		id: string,
		file: UploadedFile
	): Promise<ProfileDto | never> {
		const exists = await UserDbService.exists({id});
		if (!exists) {
			ErrorThrower.throwBadRequest("User with provided id doesn't exist.");
		}

		const fileName = FileManager.generateNameWithExt(".jpg");
		await FileManager.save(file, fileName);
		const user = (await UserDbService.updateById(id, {avatar: fileName}))!;

		return new ProfileDto(user);
	}

	static async deleteAvatar(id: string): Promise<ProfileDto | never> {
		const user = await UserDbService.getById(id);
		if (!user) {
			ErrorThrower.throwBadRequest("User with provided id doesn't exist.");
		}

		if (!user.avatar) {
			ErrorThrower.throwBadRequest(
				"User with provided id doesn't have an avatar."
			);
		}

		await FileManager.delete(user.avatar);
		const updatedUser = (await UserDbService.updateById(id, {avatar: null}))!;

		return new ProfileDto(updatedUser);
	}
}

export default ProfileService;
