import {Project, ProjectDbService} from "../../common/database/services";
import {ManyDataReturn, PaginationOptions} from "../../common/database/types";
import {ProjectDto} from "../../common/dtos";
import {ErrorFactory} from "../../common/error";

class ProjectService {
	static async create(project: Project): Promise<ProjectDto> {
		const createdProject = await ProjectDbService.create(project);
		const populatedProject = await ProjectDbService.populate(createdProject);

		return new ProjectDto(populatedProject);
	}

	static async updateById(
		id: string,
		project: Partial<Project>
	): Promise<ProjectDto | never> {
		const exists = await ProjectDbService.exists({id});
		if (!exists) {
			throw ErrorFactory.getBadRequest(
				"Project with provided id doesn't exist."
			);
		}

		const updatedProject = (await ProjectDbService.updateById(id, project))!;
		const populatedProject = await ProjectDbService.populate(updatedProject);

		return new ProjectDto(populatedProject);
	}

	static async deleteById(id: string): Promise<ProjectDto | never> {
		const exists = await ProjectDbService.exists({id});
		if (!exists) {
			throw ErrorFactory.getBadRequest(
				"Project with provided id doesn't exist."
			);
		}

		const deletedProject = (await ProjectDbService.deleteById(id))!;
		const populatedProject = await ProjectDbService.populate(deletedProject);

		return new ProjectDto(populatedProject);
	}

	static async getAll({
		sort,
		limit,
		offset,
		search
	}: PaginationOptions): Promise<ManyDataReturn<ProjectDto>> {
		const {data, totalCount} = await ProjectDbService.getAll({
			sort,
			limit,
			offset,
			search
		});
		const populatedData = await ProjectDbService.populateMany(data);

		return {data: populatedData.map(p => new ProjectDto(p)), totalCount};
	}

	static async getById(id: string): Promise<ProjectDto | never> {
		const exists = await ProjectDbService.exists({id});
		if (!exists) {
			throw ErrorFactory.getBadRequest(
				"Project with provided id doesn't exist."
			);
		}

		const project = (await ProjectDbService.getById(id))!;
		const populatedProject = await ProjectDbService.populate(project);

		return new ProjectDto(populatedProject);
	}
}

export default ProjectService;
