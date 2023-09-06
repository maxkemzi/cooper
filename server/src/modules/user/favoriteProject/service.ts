import {
	ProjectDbService,
	UserDbService
} from "../../../common/database/services";
import {
	ManyDataReturn,
	PaginationOptions
} from "../../../common/database/types";
import {ProjectDto, UserDto} from "../../../common/dtos";
import {ErrorFactory} from "../../../common/error";

class FavoriteProjectService {
	static async getAll(
		id: string,
		{limit, sort, offset, search}: PaginationOptions
	): Promise<ManyDataReturn<ProjectDto> | never> {
		const exists = await UserDbService.exists({id});
		if (!exists) {
			throw ErrorFactory.getBadRequest("User with provided id doesn't exist.");
		}

		const {data, totalCount} = await UserDbService.getFavoriteProjectsById(id, {
			limit,
			sort,
			offset,
			search
		});
		const populatedData = await ProjectDbService.populateMany(data);

		return {data: populatedData.map(p => new ProjectDto(p)), totalCount};
	}

	static async add(
		userId: string,
		projectId: string
	): Promise<UserDto | never> {
		const userExists = await UserDbService.exists({id: userId});
		if (!userExists) {
			throw ErrorFactory.getBadRequest("User with provided id doesn't exist.");
		}

		const projectExists = await ProjectDbService.exists({id: projectId});
		if (!projectExists) {
			throw ErrorFactory.getBadRequest(
				"Project with provided id doesn't exist."
			);
		}

		const user = (await UserDbService.addFavoriteProject(userId, projectId))!;

		return new UserDto(user);
	}

	static async remove(
		userId: string,
		projectId: string
	): Promise<UserDto | never> {
		const userExists = await UserDbService.exists({id: userId});
		if (!userExists) {
			throw ErrorFactory.getBadRequest("User with provided id doesn't exist.");
		}

		const projectExists = await ProjectDbService.exists({id: projectId});
		if (!projectExists) {
			throw ErrorFactory.getBadRequest(
				"Project with provided id doesn't exist."
			);
		}

		const user = (await UserDbService.removeFavoriteProject(
			userId,
			projectId
		))!;

		return new UserDto(user);
	}
}

export default FavoriteProjectService;
