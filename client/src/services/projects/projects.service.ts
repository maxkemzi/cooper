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
				dispatch(projectsActs.setProjects(response.data.projects));
				dispatch(projectsActs.setTotalCount(response.data.totalCount));
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
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
				dispatch(projectsActs.setPage(params.page));
				dispatch(projectsActs.addProjects(response.data.projects));
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
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
				dispatch(projectActs.setProject(response.data));
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
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
				dispatch(projectsActs.setProjects(response.data.projects));
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
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
				dispatch(projectsActs.setProjects(response.data.projects));
				dispatch(projectsActs.setTotalCount(response.data.totalCount));
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
			} finally {
				dispatch(projectsActs.setIsLoading(false));
			}
		};
	}

	static fetchMoreByAuth(params: ProjectsRequestParams) {
		return async (dispatch: AppDispatch) => {
			dispatch(projectsActs.setIsLoadingMore(true));
			try {
				const response = await ProjectsAPI.fetchByAuth(params);
				dispatch(projectsActs.setPage(params.page));
				dispatch(projectsActs.addProjects(response.data.projects));
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
			} finally {
				dispatch(projectsActs.setIsLoadingMore(false));
			}
		};
	}

	static fetchFavorites(params: ProjectsRequestParams) {
		return async (dispatch: AppDispatch) => {
			dispatch(projectsActs.setIsLoading(true));
			try {
				const response = await ProjectsAPI.fetchFavorites(params);
				dispatch(projectsActs.setProjects(response.data.projects));
				dispatch(projectsActs.setTotalCount(response.data.totalCount));
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
			} finally {
				dispatch(projectsActs.setIsLoading(false));
			}
		};
	}

	static fetchMoreFavorites(params: ProjectsRequestParams) {
		return async (dispatch: AppDispatch) => {
			dispatch(projectsActs.setIsLoadingMore(true));
			try {
				const response = await ProjectsAPI.fetchFavorites(params);
				dispatch(projectsActs.setPage(params.page));
				dispatch(projectsActs.addProjects(response.data.projects));
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
			} finally {
				dispatch(projectsActs.setIsLoadingMore(false));
			}
		};
	}

	static create(project: ProjectsCreateValues, redirect: () => void) {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await ProjectsAPI.create(project);
				dispatch(projectsActs.addProject(response.data));
				dispatch(
					appActs.setNotification({
						type: "success",
						text: "Project has been created."
					})
				);
				redirect();
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
			}
		};
	}

	static deleteOne(id: string | number) {
		return async (dispatch: AppDispatch) => {
			try {
				await ProjectsAPI.deleteOne(id);
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
			}
		};
	}

	static updateOne(id: string | number, project: ProjectsUpdateValues) {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await ProjectsAPI.updateOne(id, project);
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
			}
		};
	}
}

export default ProjectsService;
