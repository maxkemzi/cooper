class Dto {
	constructor(document) {
		const {id, createdDate} = document || {};

		this.id = id;
		this.createdDate = createdDate;
	}

	static fromDocument(document) {
		return new this(document);
	}

	static fromDocuments(documents) {
		return documents.map(model => new this(model));
	}
}

export default Dto;
