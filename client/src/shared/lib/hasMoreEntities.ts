const hasMoreEntities = ({
	totalCount,
	limit,
	page
}: {
	totalCount: number | null;
	page: number;
	limit: number;
}): boolean =>
	totalCount !== null ? page < Math.ceil(totalCount / limit) : false;

export default hasMoreEntities;
