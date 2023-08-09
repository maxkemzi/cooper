import {Schema, model} from "mongoose";
import DatabaseModel from "../lib/DatabaseModel";

const userSchema = DatabaseModel.createSchema("users", {
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
});

userSchema.pre("findOneAndDelete", async function (next) {
	const id = this.getFilter()._id;

	try {
		await Promise.all([
			model("RefreshToken").deleteMany({user: id}),
			model("Project").deleteMany({creator: id})
		]);
		next();
	} catch (e) {
		next(e);
	}
});

const User = DatabaseModel.createFromSchema("User", userSchema);

export default User;
