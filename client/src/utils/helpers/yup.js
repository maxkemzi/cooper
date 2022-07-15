// eslint-disable-next-line import/prefer-default-export
export const mergeYupSchemas = (...schemas) => {
	const [first, ...rest] = schemas;

	return rest.reduce(
		(mergedSchemas, schema) => mergedSchemas.concat(schema),
		first
	);
};
