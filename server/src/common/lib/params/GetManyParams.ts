class GetManyParams {
	search: string;
	sort: string;

	constructor(query: any) {
		this.search = query.search || "";
		this.sort = query.sort || "createdDate";
	}
}

export default GetManyParams;
