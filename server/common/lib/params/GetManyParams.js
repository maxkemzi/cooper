class GetManyParams {
	constructor(query) {
		const {search, sort} = query || {};

		this.search = search || "";
		this.sort = sort || "createdDate";
	}
}

export default GetManyParams;
