import ProjectsAPI from "@api/projects/projects.api";
import {IProject} from "@customTypes/index";
import ProjectsRequestParams from "@customTypes/projects";
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

	// static getAllByUserId() {
	// 	return async (dispatch: AppDispatch) => {
	// 		dispatch(projectsActs.setIsLoading(true));
	// 		try {
	// 			const response = await ProjectsAPI.getAllByUserId();
	// 			console.log(response);
	// 			dispatch(projectsActs.setProjects(response.data));
	// 			dispatch(appActs.setError(null));
	// 		} catch (e) {
	// 			dispatch(appActs.setError(e.response?.data?.message));
	// 			console.log(e.response?.data?.message);
	// 		} finally {
	// 			dispatch(projectsActs.setIsLoading(false));
	// 		}
	// 	};
	// }

	static create(project: IProject) {
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

	static deleteOne(id: number) {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await ProjectsAPI.deleteOne(id);
				console.log(response);
				dispatch(projectsActs.removeProject(id));
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
				console.log(e.response?.data?.message);
			}
		};
	}
}

export default ProjectsService;
