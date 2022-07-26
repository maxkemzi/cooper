const getQueryLookups = () => [
	{
		$lookup: {
			from: "users",
			localField: "creator",
			foreignField: "_id",
			pipeline: [{$project: {_id: 0, avatar: 1, username: 1}}],
			as: "creator"
		}
	},
	{$unwind: "$creator"},
	{
		$lookup: {
			from: "categories",
			localField: "categories",
			foreignField: "_id",
			as: "categories"
		}
	}
];

const getQueryStructure = (limit, offset) => [
	{
		$facet: {
			projects: [{$limit: limit}, {$skip: offset}],
			totalCount: [
				{
					$count: "totalCount"
				}
			]
		}
	},
	{
		$addFields: {
			totalCount: {
				$ifNull: [{$arrayElemAt: ["$totalCount.totalCount", 0]}, 0]
			}
		}
	}
];

module.exports = {
	getQueryLookups,
	getQueryStructure
};
