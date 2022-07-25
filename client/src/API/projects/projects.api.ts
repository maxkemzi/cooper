import $api from "@axios/index";
import ProjectsResponse, {ProjectResponse} from "@customTypes/apis/projects";
import {
	ProjectsRequestParams,
	ProjectsCreateValues,
	ProjectsUpdateValues
} from "@customTypes/services/projects";
import axios, {AxiosResponse} from "axios";

class ProjectsAPI {
	static async fetchAll(
		params: ProjectsRequestParams
	): Promise<AxiosResponse<ProjectsResponse>> {
		return axios.get<ProjectsResponse>(`${process.env.API_URL}api/projects`, {
			params
		});
	}

	static async fetchOneById(
		id: string
	): Promise<AxiosResponse<ProjectResponse>> {
		return axios.get<ProjectResponse>(
			`${process.env.API_URL}api/projects/${id}`
		);
	}

	static async fetchByUsername(
		username: string,
		params: ProjectsRequestParams
	): Promise<AxiosResponse<ProjectsResponse>> {
		return $api.get<ProjectsResponse>(`/projects/user/${username}`, {params});
	}

	static async fetchByAuth(
		params: ProjectsRequestParams
	): Promise<AxiosResponse<ProjectsResponse>> {
		return $api.get<ProjectsResponse>("/projects/user", {params});
	}

	static async fetchFavorites(
		params: ProjectsRequestParams
	): Promise<AxiosResponse<ProjectsResponse>> {
		return $api.get<ProjectsResponse>("/projects/favorites", {params});
	}

	static async create(
		project: ProjectsCreateValues
	): Promise<AxiosResponse<ProjectResponse>> {
		return $api.post<ProjectResponse>("/projects", project);
	}

	static async deleteOne(
		id: number | string
	): Promise<AxiosResponse<ProjectResponse>> {
		return $api.delete<ProjectResponse>(`/projects/${id}`);
	}

	static async updateOne(
		id: string | number,
		project: ProjectsUpdateValues
	): Promise<AxiosResponse<ProjectResponse>> {
		return $api.put<ProjectResponse>(`/projects/${id}`, project);
	}
}

export default ProjectsAPI;
