// eslint-disable-next-line import/prefer-default-export
export const getInfoItems = (items: any) => {
	const array = [];
	const keys = Object.keys(items);

	for (let i = 0; i < keys.length; i += 1) {
		const title = keys[i].replace(/([A-Z])/g, " $1").toLowerCase();
		array.push({
			id: i + 1,
			value: items[keys[i]],
			title
		});
	}

	return array;
};
