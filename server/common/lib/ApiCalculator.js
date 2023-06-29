class ApiCalculator {
	static calcTotalPages(totalCount, limit) {
		return Math.ceil(totalCount / limit);
	}

	static calcOffset(page, limit) {
		return (page - 1) * limit;
	}
}

module.exports = ApiCalculator;
