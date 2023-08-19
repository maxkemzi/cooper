class Populator {
	static async populate(document, options) {
		const populatedDocument = await document.populate(options);

		return populatedDocument;
	}

	static populateQuery(query, options) {
		return query.populate(options);
	}
}

export default Populator;
