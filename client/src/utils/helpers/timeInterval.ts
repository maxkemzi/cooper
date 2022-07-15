const getTimeInterval = (date: Date): string => {
	let seconds = Math.floor((Date.now() - date.getTime()) / 1000);
	let unit = "second";
	let direction = "ago";
	if (seconds < 0) {
		seconds = -seconds;
		direction = "from now";
	}
	let value = seconds;
	if (seconds >= 31536000) {
		value = Math.floor(seconds / 31536000);
		unit = "year";
	} else if (seconds >= 86400) {
		value = Math.floor(seconds / 86400);
		unit = "day";
	} else if (seconds >= 3600) {
		value = Math.floor(seconds / 3600);
		unit = "hour";
	} else if (seconds >= 60) {
		value = Math.floor(seconds / 60);
		unit = "minute";
	}
	if (value !== 1) {
		unit += "s";
	}
	return `${value} ${unit} ${direction}`;
};

export default getTimeInterval;
