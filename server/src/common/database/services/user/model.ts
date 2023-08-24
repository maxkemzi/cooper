import {Schema, model} from "mongoose";
import DatabaseSchema from "../../lib/DatabaseSchema";
import {UserDocument} from "../types";

const userSchema = new DatabaseSchema(
	{
		favoriteProjects: [{type: Schema.Types.ObjectId, ref: "Project"}],
		email: {type: String, required: true, unique: true},
		username: {type: String, required: true, unique: true},
		password: {type: String, required: true},
		avatar: {type: String, default: null},
		description: {type: String, default: null},
		location: {type: String, default: null},
		activationLink: {type: String, default: null},
		isActivated: {type: Boolean, default: false},
		createdDate: {type: Date, default: Date.now}
	},
	{collection: "users"}
);

userSchema.pre("findOneAndDelete", async function (next) {
	const id = this.getFilter()._id;

	try {
		await Promise.all([
			model("RefreshToken").deleteMany({user: id}),
			model("Project").deleteMany({creator: id})
		]);
		next();
	} catch (e: any) {
		next(e);
	}
});

const User = model<UserDocument>("User", userSchema);

export default User;
