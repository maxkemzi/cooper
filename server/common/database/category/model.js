const DatabaseModel = require("../lib/DatabaseModel");

const Category = DatabaseModel.create(
	{
		name: "Category",
		collectionName: "categories"
	},
	{
		name: {type: String, required: true, unique: true}
	}
);

module.exports = Category;
