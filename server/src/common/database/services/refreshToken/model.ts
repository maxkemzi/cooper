import {Schema, model} from "mongoose";
import DatabaseSchema from "../../lib/DatabaseSchema";
import {RefreshTokenDocument} from "../types";

const refreshTokenSchema = new DatabaseSchema(
	{
		user: {type: Schema.Types.ObjectId, ref: "User"},
		token: {type: String, required: true}
	},
	{collection: "refreshTokens"}
);

const RefreshToken = model<RefreshTokenDocument>(
	"RefreshToken",
	refreshTokenSchema
);

export default RefreshToken;
