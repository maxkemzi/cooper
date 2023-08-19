import {model} from "mongoose";
import DatabaseSchema from "../../lib/DatabaseSchema";

const categorySchema = new DatabaseSchema(
	{
		name: {type: String, required: true, unique: true}
	},
	{collection: "categories"}
);

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

const Category = model("Category", categorySchema);

export default Category;
