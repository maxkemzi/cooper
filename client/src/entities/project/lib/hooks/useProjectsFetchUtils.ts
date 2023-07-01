import {useTypedSelector} from "@shared/model";
import {useMemo} from "react";
import {
	selectProjectsIsFetching,
	selectProjectsLimit,
	selectProjectsPage,
	selectProjectsSearch,
	selectProjectsShouldRefetch,
	selectProjectsSort,
	selectProjectsTotalPages
} from "../../model/selectors";

const useProjectsFetchUtils = () => {
	const isFetching = useTypedSelector(selectProjectsIsFetching);
	const search = useTypedSelector(selectProjectsSearch);
	const limit = useTypedSelector(selectProjectsLimit);
	const sort = useTypedSelector(selectProjectsSort);
	const page = useTypedSelector(selectProjectsPage);
	const totalPages = useTypedSelector(selectProjectsTotalPages);
	const shouldRefetch = useTypedSelector(selectProjectsShouldRefetch);

	const hasMore = page < totalPages;

	const params = useMemo(
		() => ({page, limit, search, sort: sort.value}),
		[limit, page, search, sort.value]
	);

	return {hasMore, isFetching, params, shouldRefetch};
};

export default useProjectsFetchUtils;
