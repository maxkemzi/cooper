const {Schema, model} = require("mongoose");

const CategorySchema = new Schema(
	{
		name: {type: String, required: true, unique: true},
		skills: {type: Array, required: true}
	},
	{collection: "categories"}
);

const Category = model("Category", CategorySchema);

module.exports = Category;
