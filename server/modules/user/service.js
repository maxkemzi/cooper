import {ProjectDbService, UserDbService} from "../../common/database/services";
import {UserDto, ProjectDto} from "../../common/dtos";
import {ErrorThrower} from "../../common/error";

class UserService {
	static async activate(activationLink) {
		const user = await UserDbService.activate(activationLink);
		if (user == null) {
			ErrorThrower.throwBadRequest("Wrong activation link.");
		}

		return new UserDto(user);
	}

	static async delete(id) {
		const user = await UserDbService.deleteById(id);
		return new UserDto(user);
	}

	static async getProjects(id, {sort, limit, offset, search}) {
		const {projects, totalCount} = await ProjectDbService.getByCreatorId(id, {
			sort,
			limit,
			offset,
			search
		});
		return {projects: projects.map(p => new ProjectDto(p)), totalCount};
	}
}

export default UserService;
