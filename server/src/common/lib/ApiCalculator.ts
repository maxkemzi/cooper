class ApiCalculator {
	static calcTotalPages(totalCount: number, limit: number): number {
		return Math.ceil(totalCount / limit);
	}

	static calcOffset(page: number, limit: number): number {
		return (page - 1) * limit;
	}
}

export default ApiCalculator;
