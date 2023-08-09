import {Schema} from "mongoose";
import DatabaseModel from "../lib/DatabaseModel";

const refreshTokenSchema = DatabaseModel.createSchema("refreshTokens", {
	user: {type: Schema.Types.ObjectId, ref: "User"},
	token: {type: String, required: true}
});

const RefreshToken = DatabaseModel.createFromSchema(
	"RefreshToken",
	refreshTokenSchema
);

export default RefreshToken;
