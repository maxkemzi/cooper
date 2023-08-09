import {model} from "mongoose";
import DatabaseModel from "../lib/DatabaseModel";

const categorySchema = DatabaseModel.createSchema("categories", {
	name: {type: String, required: true, unique: true}
});

categorySchema.pre("findOneAndDelete", async function (next) {
	const id = this.getFilter()._id;

	try {
		await model("Project").updateMany(
			{categories: id},
			{$pull: {categories: id}}
		);
		next();
	} catch (e) {
		next(e);
	}
});

const Category = DatabaseModel.createFromSchema("Category", categorySchema);

export default Category;
