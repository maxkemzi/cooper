const {Schema} = require("mongoose");
const DatabaseModel = require("../lib/DatabaseModel");

const refreshTokenSchema = DatabaseModel.createSchema("refreshTokens", {
	user: {type: Schema.Types.ObjectId, ref: "User"},
	token: {type: String, required: true}
});

const RefreshToken = DatabaseModel.createFromSchema(
	"RefreshToken",
	refreshTokenSchema
);

module.exports = RefreshToken;
