import {setProjectsPage, setProjectsSearch} from "@entities/project";
import {useTypedDispatch} from "@shared/model";
import {SearchBar} from "@shared/ui";

const ProjectsSearchBar = () => {
	const dispatch = useTypedDispatch();

	const handleSearch = (value: string) => {
		dispatch(setProjectsPage(1));
		dispatch(setProjectsSearch(value.trim()));
	};

	const handleClear = () => {
		dispatch(setProjectsPage(1));
		dispatch(setProjectsSearch(""));
	};

	return <SearchBar onSearch={handleSearch} onClear={handleClear} />;
};

export default ProjectsSearchBar;
