const formatDate = (date: Date): string =>
	date.toLocaleString(undefined, {
		month: "short",
		day: "2-digit",
		year: "numeric"
	});

export default formatDate;
