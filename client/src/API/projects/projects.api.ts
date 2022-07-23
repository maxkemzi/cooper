import $api from "@axios/index";
import {
	ProjectsRequestParams,
	ProjectsCreateValues,
	ProjectsUpdateValues
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

	static async fetchByAuth(params: ProjectsRequestParams) {
		return $api.get("/projects/user", {params});
	}

	static async fetchFavorites(params: ProjectsRequestParams) {
		return $api.get("/projects/favorites", {params});
	}

	static async create(project: ProjectsCreateValues) {
		return $api.post("/projects", project);
	}

	static async deleteOne(id: number | string) {
		return $api.delete(`/projects/${id}`);
	}

	static async updateOne(id: string | number, project: ProjectsUpdateValues) {
		return $api.put(`/projects/${id}`, project);
	}
}

export default ProjectsAPI;
