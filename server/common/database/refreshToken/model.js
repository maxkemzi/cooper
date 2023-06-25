const {Schema} = require("mongoose");
const DatabaseModel = require("../lib/DatabaseModel");

const RefreshToken = DatabaseModel.create(
	{
		name: "RefreshToken",
		collectionName: "refreshTokens"
	},
	{
		user: {type: Schema.Types.ObjectId, ref: "User"},
		token: {type: String, required: true}
	}
);

module.exports = RefreshToken;
