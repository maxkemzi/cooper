import {selectProjectsSearch, setProjectsSearch} from "@entities/project";
import {useTypedDispatch, useTypedSelector} from "@shared/model";
import {SearchBar} from "@shared/ui";

const ProjectsSearchBar = () => {
	const dispatch = useTypedDispatch();
	const search = useTypedSelector(selectProjectsSearch);

	const handleSearch = (value: string) => {
		dispatch(setProjectsSearch(value.trim()));
	};

	const handleClear = () => {
		dispatch(setProjectsSearch(""));
	};

	return (
		<SearchBar
			defaultValue={search}
			onSearch={handleSearch}
			onClear={handleClear}
		/>
	);
};

export default ProjectsSearchBar;
