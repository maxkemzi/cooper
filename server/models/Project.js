const {Schema, model} = require("mongoose");

const ProjectSchema = new Schema({
	creator: {type: Schema.Types.ObjectId, ref: "User", required: true},
	title: {type: String, required: true},
	description: {type: String, required: true},
	createdDate: {type: Date, default: Date.now},
	workType: {type: String, default: "default"},
	categories: [{type: Schema.Types.ObjectId, ref: "Category", required: true}],
	visibility: {type: String, default: "public"},
	budget: {type: Number, default: 0}
});

const Project = model("Project", ProjectSchema);

module.exports = Project;
