const User = require("../models/User");
const ApiError = require("../exceptions/ApiError");
const UserDto = require("../dtos/UserDto");

class UsersService {
	static async activate(activationLink) {
		const user = await User.findOne({activationLink});

		if (!user) {
			throw ApiError.badRequest("Wrong activation link!");
		}

		user.isActivated = true;
		await user.save();
	}

	static async getAll() {
		const users = await User.find();
		return users;
	}

	static async getOneByUsername(username) {
		const user = await User.findOne({username});
		// TODO
		return new UserDto(user);
	}

	static async getOneById(id) {
		const user = await User.findById(id);
		return user;
	}

	static async updateOne(id, user) {
		const updatedUser = await User.updateOne({_id: id}, user, {new: true});
		return updatedUser;
	}

	static async saveProject(projectId, userId) {
		const user = await User.findByIdAndUpdate(
			userId,
			{$push: {saves: projectId}},
			{new: true}
		);
		return user;
	}

	static async unsaveProject(projectId, userId) {
		const user = await User.findByIdAndUpdate(
			userId,
			{$pull: {saves: projectId}},
			{new: true}
		);
		return user;
	}
}

module.exports = UsersService;
