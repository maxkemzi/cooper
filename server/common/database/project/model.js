import {Schema, model} from "mongoose";
import DatabaseModel from "../lib/DatabaseModel";

const projectSchema = DatabaseModel.createSchema("projects", {
	creator: {type: Schema.Types.ObjectId, ref: "User", required: true},
	categories: [{type: Schema.Types.ObjectId, ref: "Category", required: true}],
	title: {type: String, required: true},
	description: {type: String, required: true},
	workType: {type: String, default: "onsite"},
	visibility: {type: String, default: "public"},
	budget: {type: Number, default: 0},
	createdDate: {type: Date, default: Date.now}
});

projectSchema.pre("findOneAndDelete", async function (next) {
	const id = this.getFilter()._id;

	try {
		await model("User").updateMany(
			{favoriteProjects: id},
			{$pull: {favoriteProjects: id}}
		);
		next();
	} catch (error) {
		next(error);
	}
});

const Project = DatabaseModel.createFromSchema("Project", projectSchema);

export default Project;
