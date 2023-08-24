class PaginationParams {
	page: number;
	limit: number;

	constructor(query: any) {
		const {page, limit} = query || {};

		this.page = parseInt(page, 10) || 1;
		this.limit = parseInt(limit, 10) || 10;
	}
}

export default PaginationParams;
