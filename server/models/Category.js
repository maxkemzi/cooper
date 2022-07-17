const {Schema, model} = require("mongoose");

const CategorySchema = new Schema(
	{
		name: {type: String, required: true, unique: true}
	},
	{collection: "categories"}
);

const Category = model("Category", CategorySchema);

module.exports = Category;
