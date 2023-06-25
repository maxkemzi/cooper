const {Schema} = require("mongoose");
const DatabaseModel = require("../lib/DatabaseModel");

const User = DatabaseModel.create(
	{
		name: "User",
		collectionName: "users"
	},
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
	}
);

module.exports = User;
