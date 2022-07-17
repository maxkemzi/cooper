import useProjects from "@hooks/useProjects";
import {ProjectList} from "@components/ProjectList";
import React from "react";
import ProfileProjectsInner from "./ProfileProjects.styled";

const ProfileProjectList = () => {
	const {projects, isLoading} = useProjects();

	return (
		<ProfileProjectsInner>
			<ProjectList projects={projects} isLoading={isLoading} />
		</ProfileProjectsInner>
	);
};

export default ProfileProjectList;
