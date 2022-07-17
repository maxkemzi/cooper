import $api from "@axios/index";
import {
	ProjectsRequestParams,
	ProjectsCreateValues
} from "@customTypes/services/projects";
import axios from "axios";

class ProjectsAPI {
	static async fetchAll(params: ProjectsRequestParams) {
		return axios.get(`${process.env.API_URL}api/projects`, {
			params
		});
	}

	static async fetchOneById(id: string) {
		return axios.get(`${process.env.API_URL}api/projects/${id}`);
	}

	static async fetchByUsername(
		username: string,
		params: ProjectsRequestParams
	) {
		return $api.get(`/projects/user/${username}`, {params});
	}

	static async create(project: ProjectsCreateValues) {
		return $api.post("/projects", project);
	}

	static async deleteOne(id: number) {
		return $api.delete(`/projects/${id}`);
	}
}

export default ProjectsAPI;
