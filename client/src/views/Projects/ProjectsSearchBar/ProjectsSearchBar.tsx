import SearchBar from "@components/SearchBar/SearchBar";
import useTypedDispatch from "@hooks/useTypedDispatch";
import {projectsActs} from "@store/projects/projects.slice";
import React, {memo} from "react";

const ProjectsSearchBar = memo(() => {
	const dispatch = useTypedDispatch();

	const handleSearch = (query: string) => {
		dispatch(projectsActs.setPage(1));
		dispatch(projectsActs.setSearch(query.trim()));
	};

	const handleClear = () => {
		dispatch(projectsActs.setSearch(""));
	};

	return <SearchBar onSearch={handleSearch} onClear={handleClear} />;
});

export default ProjectsSearchBar;
