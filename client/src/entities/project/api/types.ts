import {AxiosResponse} from "axios";
import {ProfileProject, Project} from "../model/types";
import {
	ProjectCategory,
	ProjectCreator,
	ProjectVisibility,
	ProjectWorkType
} from "../types";

interface ProjectFromApi {
	id: string;
	workType: ProjectWorkType;
	budget: number;
	categories: ProjectCategory[];
	title: string;
	description: string;
	creator: ProjectCreator;
	visibility: ProjectVisibility;
	createdDate: string;
}

type ProfileProjectFromApi = ProjectFromApi;

interface ProjectToApi {
	workType: ProjectWorkType;
	budget: number;
	categoryIds: string[];
	title: string;
	description: string;
	visibility: ProjectVisibility;
}

type MultipleProjectsRes = AxiosResponse<Project[]>;
type MultipleProjectsResFromApi = ProjectFromApi[];

type MultipleProfileProjectsRes = AxiosResponse<ProfileProject[]>;
type MultipleProfileProjectsResFromApi = ProfileProjectFromApi[];

type SingleProjectRes = AxiosResponse<Project>;
type SingleProjectResFromApi = ProjectFromApi;

interface GetMultipleReqParams {
	page?: number;
	sort?: string;
	search?: string;
	limit?: number;
}

export type {
	GetMultipleReqParams,
	MultipleProfileProjectsRes,
	MultipleProfileProjectsResFromApi,
	MultipleProjectsRes,
	MultipleProjectsResFromApi,
	SingleProjectRes,
	SingleProjectResFromApi,
	ProjectToApi,
	ProfileProjectFromApi,
	ProjectFromApi
};
