import {ProjectDbService, UserDbService} from "../../common/database/services";
import {ManyDataReturn, PaginationOptions} from "../../common/database/types";
import {ProjectDto, UserDto} from "../../common/dtos";
import {ErrorThrower} from "../../common/error";

class UserService {
	static async activate(activationLink: string): Promise<UserDto | never> {
		const exists = await UserDbService.exists({activationLink});
		if (!exists) {
			ErrorThrower.throwBadRequest("Wrong activation link.");
		}

		const user = (await UserDbService.activate(activationLink))!;

		return new UserDto(user);
	}

	static async delete(id: string): Promise<UserDto | never> {
		const exists = await UserDbService.exists({id});
		if (!exists) {
			ErrorThrower.throwBadRequest("User with provided id doesn't exist.");
		}

		const deletedUser = (await UserDbService.deleteById(id))!;

		return new UserDto(deletedUser);
	}

	static async getProjects(
		id: string,
		{sort, limit, offset, search}: PaginationOptions
	): Promise<ManyDataReturn<ProjectDto> | never> {
		const exists = await UserDbService.exists({id});
		if (!exists) {
			ErrorThrower.throwBadRequest("User with provided id doesn't exist.");
		}

		const {data, totalCount} = await ProjectDbService.getByCreatorId(id, {
			sort,
			limit,
			offset,
			search
		});
		const populatedData = await ProjectDbService.populateMany(data);

		return {data: populatedData.map(p => new ProjectDto(p)), totalCount};
	}
}

export default UserService;
