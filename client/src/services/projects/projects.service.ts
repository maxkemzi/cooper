import ProjectsAPI from "@api/projects/projects.api";
import {
	ProjectsCreateValues,
	ProjectsRequestParams,
	ProjectsUpdateValues
} from "@customTypes/services/projects";
import {appActs} from "@store/app/app.slice";
import {AppDispatch} from "@store/index";
import {projectActs} from "@store/project/project.slice";
import {projectsActs} from "@store/projects/projects.slice";

class ProjectsService {
	static fetchAll(params: ProjectsRequestParams) {
		return async (dispatch: AppDispatch) => {
			dispatch(projectsActs.setIsLoading(true));
			try {
				const response = await ProjectsAPI.fetchAll(params);
				console.log(response);
				dispatch(projectsActs.setProjects(response.data.projects));
				dispatch(projectsActs.setTotalCount(response.data.totalCount));
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
				console.log(e.response?.data?.message);
			} finally {
				dispatch(projectsActs.setIsLoading(false));
			}
		};
	}

	static fetchMore(params: ProjectsRequestParams) {
		return async (dispatch: AppDispatch) => {
			dispatch(projectsActs.setIsLoadingMore(true));
			try {
				const response = await ProjectsAPI.fetchAll(params);
				console.log(response);
				dispatch(projectsActs.setPage(params.page));
				dispatch(projectsActs.addProjects(response.data.projects));
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
				console.log(e.response?.data?.message);
			} finally {
				dispatch(projectsActs.setIsLoadingMore(false));
			}
		};
	}

	static fetchOneById(id: string) {
		return async (dispatch: AppDispatch) => {
			dispatch(projectActs.setIsLoading(true));
			try {
				const response = await ProjectsAPI.fetchOneById(id);
				console.log(response);
				dispatch(projectActs.setProject(response.data));
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
				console.log(e.response?.data?.message);
			} finally {
				dispatch(projectActs.setIsLoading(false));
			}
		};
	}

	static fetchByUsername(username: string, params: ProjectsRequestParams) {
		return async (dispatch: AppDispatch) => {
			dispatch(projectsActs.setIsLoading(true));
			try {
				const response = await ProjectsAPI.fetchByUsername(username, params);
				console.log(response);
				dispatch(projectsActs.setProjects(response.data.projects));
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
				console.log(e.response?.data?.message);
			} finally {
				dispatch(projectsActs.setIsLoading(false));
			}
		};
	}

	static fetchByAuth(params: ProjectsRequestParams) {
		return async (dispatch: AppDispatch) => {
			dispatch(projectsActs.setIsLoading(true));
			try {
				const response = await ProjectsAPI.fetchByAuth(params);
				console.log(response);
				dispatch(projectsActs.setProjects(response.data.projects));
				dispatch(projectsActs.setTotalCount(response.data.totalCount));
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
				console.log(e.response?.data?.message);
			} finally {
				dispatch(projectsActs.setIsLoading(false));
			}
		};
	}

	static fetchFavorites(params: ProjectsRequestParams) {
		return async (dispatch: AppDispatch) => {
			dispatch(projectsActs.setIsLoading(true));
			try {
				const response = await ProjectsAPI.fetchFavorites(params);
				console.log(response);
				dispatch(projectsActs.setProjects(response.data.projects));
				dispatch(projectsActs.setTotalCount(response.data.totalCount));
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
				console.log(e.response?.data?.message);
			} finally {
				dispatch(projectsActs.setIsLoading(false));
			}
		};
	}

	static create(project: ProjectsCreateValues) {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await ProjectsAPI.create(project);
				console.log(response);
				dispatch(projectsActs.addProject(response.data));
				dispatch(
					appActs.setNotification({
						type: "success",
						text: "Project has been created."
					})
				);
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
				console.log(e.response?.data?.message);
			}
		};
	}

	static deleteOne(id: string | number) {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await ProjectsAPI.deleteOne(id);
				console.log(response);
				dispatch(projectsActs.removeProject(id));
				dispatch(
					appActs.setNotification({
						type: "success",
						text: "Project has been deleted."
					})
				);
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
				console.log(e.response?.data?.message);
			}
		};
	}

	static updateOne(id: string | number, project: ProjectsUpdateValues) {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await ProjectsAPI.updateOne(id, project);
				console.log(response);
				dispatch(projectsActs.updateProject(response.data));
				dispatch(
					appActs.setNotification({
						type: "success",
						text: "Project has been edited."
					})
				);
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
				console.log(e.response?.data?.message);
			}
		};
	}
}

export default ProjectsService;
