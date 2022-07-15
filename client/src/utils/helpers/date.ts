// eslint-disable-next-line import/prefer-default-export
export const formatDate = (date: Date): string =>
	date.toLocaleString("default", {
		month: "short",
		day: "2-digit",
		year: "numeric"
	});
