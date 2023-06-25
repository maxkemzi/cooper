const deletePropsFromObject = <T extends object, K extends keyof T>(
	object: T,
	props: K[]
): Omit<T, K> => {
	const result = {...object};

	props.forEach(prop => {
		delete result[prop];
	});

	return result;
};

export default deletePropsFromObject;
