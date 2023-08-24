const PopulateOptions = {
	PROJECT: [
		{path: "creator", select: "username avatar location"},
		{path: "categories", select: "id name"}
	]
};

export default PopulateOptions;
