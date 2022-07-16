import $api from "@axios/index";
import {IProject} from "@customTypes/index";
import ProjectsRequestParams from "@customTypes/projects";
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

	static async fetchAllYours() {
		return $api.get("/projects");
	}

	static async create(project: IProject) {
		return $api.post("/projects", project);
	}

	static async deleteOne(id: number) {
		return $api.delete(`/projects/${id}`);
	}
}

export default ProjectsAPI;
