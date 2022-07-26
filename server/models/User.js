const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	username: {type: String, required: true, unique: true},
	isActivated: {type: Boolean, default: false},
	avatar: {type: String, default: ""},
	description: {type: String, default: ""},
	activationLink: {type: String},
	favorites: [{type: Schema.Types.ObjectId, ref: "Project"}],
	projectsCount: {type: Number, default: 0},
	location: {type: String, default: ""},
	createdDate: {type: Date, default: Date.now}
});

const User = model("User", UserSchema);

module.exports = User;
