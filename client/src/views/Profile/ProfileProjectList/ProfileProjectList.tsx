import {ProjectList} from "@components/ProjectList";
import useTypedSelector from "@hooks/useTypedSelector";
import {
	getProjects,
	getProjectsIsLoading
} from "@store/projects/projects.selectors";
import React from "react";
import ProfileProjectsInner from "./ProfileProjects.styled";

const ProfileProjectList = () => {
	const projects = useTypedSelector(getProjects);
	const isLoading = useTypedSelector(getProjectsIsLoading);

	return (
		<ProfileProjectsInner>
			<ProjectList projects={projects} isLoading={isLoading} />
		</ProfileProjectsInner>
	);
};

export default ProfileProjectList;
