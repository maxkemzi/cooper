const {Schema} = require("mongoose");
const DatabaseModel = require("../lib/DatabaseModel");

const Project = DatabaseModel.create(
	{
		name: "Project",
		collectionName: "projects"
	},
	{
		creator: {type: Schema.Types.ObjectId, ref: "User", required: true},
		categories: [
			{type: Schema.Types.ObjectId, ref: "Category", required: true}
		],
		title: {type: String, required: true},
		description: {type: String, required: true},
		workType: {type: String, default: "onsite"},
		visibility: {type: String, default: "public"},
		budget: {type: Number, default: 0},
		createdDate: {type: Date, default: Date.now}
	}
);

module.exports = Project;
