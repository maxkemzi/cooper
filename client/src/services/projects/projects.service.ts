import ProjectsAPI from "@api/projects/projects.api";
import Handlers from "@customTypes/services";
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
				dispatch(appActs.setError(null));
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
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
				dispatch(appActs.setError(null));
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
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
				dispatch(appActs.setError(null));
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
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
				dispatch(appActs.setError(null));
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
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
				dispatch(appActs.setError(null));
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
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
				dispatch(appActs.setError(null));
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
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
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
				console.log(e.response?.data?.message);
			}
		};
	}

	static deleteOne(id: string | number, handlers?: Handlers) {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await ProjectsAPI.deleteOne(id);
				console.log(response);
				dispatch(projectsActs.removeProject(id));
				handlers.handleSuccess();
			} catch (e) {
				handlers.handleError();
				dispatch(appActs.setError(e.response?.data?.message));
				console.log(e.response?.data?.message);
			}
		};
	}

	static updateOne(
		id: string | number,
		project: ProjectsUpdateValues,
		handlers?: Handlers
	) {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await ProjectsAPI.updateOne(id, project);
				console.log(response);
				dispatch(projectsActs.updateProject(response.data));
				handlers.handleSuccess();
			} catch (e) {
				handlers.handleError();
				dispatch(appActs.setError(e.response?.data?.message));
				console.log(e.response?.data?.message);
			}
		};
	}
}

export default ProjectsService;
