class PaginationParams {
	constructor(query) {
		const {page, limit} = query || {};

		this.page = parseInt(page, 10) || 1;
		this.limit = parseInt(limit, 10) || 10;
	}
}

module.exports = PaginationParams;
