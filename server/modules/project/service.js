import {ProjectDbService} from "../../common/database/services";
import {ProjectDto} from "../../common/dtos";

class ProjectService {
	static async create(project) {
		const createdProject = await ProjectDbService.create(project);
		return new ProjectDto(createdProject);
	}

	static async updateById(id, project) {
		const updatedProject = await ProjectDbService.updateById(id, project);
		return new ProjectDto(updatedProject);
	}

	static async deleteById(id) {
		const deletedProject = await ProjectDbService.deleteById(id);
		return new ProjectDto(deletedProject);
	}

	static async getAll({sort, limit, offset, search}) {
		const {projects, totalCount} = await ProjectDbService.getAll({
			sort,
			limit,
			offset,
			search
		});
		return {projects: projects.map(p => new ProjectDto(p)), totalCount};
	}

	static async getById(id) {
		const project = await ProjectDbService.getById(id);
		return new ProjectDto(project);
	}
}

export default ProjectService;
