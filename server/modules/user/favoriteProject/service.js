import {UserDbService} from "../../../common/database/services";
import {ProjectDto, UserDto} from "../../../common/dtos";

class FavoriteProjectService {
	static async getAll(id, {limit, sort, offset, search}) {
		const {projects, totalCount} = await UserDbService.getFavoriteProjectsById(
			id,
			{
				limit,
				sort,
				offset,
				search
			}
		);
		return {projects: projects.map(p => new ProjectDto(p)), totalCount};
	}

	static async add(userId, projectId) {
		const user = await UserDbService.addFavoriteProject(userId, projectId);
		return new UserDto(user);
	}

	static async remove(userId, projectId) {
		const user = await UserDbService.removeFavoriteProject(userId, projectId);
		return new UserDto(user);
	}
}

export default FavoriteProjectService;
