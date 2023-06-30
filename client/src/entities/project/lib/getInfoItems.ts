import {nanoid} from "nanoid";

interface InfoItem {
	value: string | number;
	title: string;
	id: string;
}

const getInfoItems = (items: {
	[key: string]: string | number | null;
}): InfoItem[] => {
	const resultItems: InfoItem[] = [];
	const keys: string[] = Object.keys(items);

	for (let i = 0; i < keys.length; i += 1) {
		const title: string = keys[i].replace(/([A-Z])/g, " $1").toLowerCase();
		const value = items[keys[i]];

		if (value != null) {
			resultItems.push({
				id: nanoid(),
				value,
				title
			});
		}
	}

	return resultItems;
};

export default getInfoItems;
