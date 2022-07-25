import {Project} from "@customTypes/entities";

interface ProjectsResponse {
	totalCount: number;
	projects: Project[];
}

export type ProjectResponse = Project;

export default ProjectsResponse;
