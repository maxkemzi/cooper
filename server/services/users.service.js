const User = require("../models/User");
const ApiError = require("../exceptions/ApiError");
const UserDto = require("../dtos/user.dto");

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

	static async getByUsername(username) {
		const user = await User.findOne({username});
		return new UserDto(user);
	}

	static async getById(id) {
		const user = await User.findById(id);
		return user;
	}

	static async updateOne(id, user) {
		const updatedUser = await User.findByIdAndUpdate(id, user, {new: true});
		return updatedUser;
	}

	static async addToFavorites(projectId, userId) {
		const user = await User.findByIdAndUpdate(
			userId,
			{$push: {favorites: projectId}},
			{new: true}
		);
		return user;
	}

	static async removeFromFavorites(projectId, userId) {
		const user = await User.findByIdAndUpdate(
			userId,
			{$pull: {favorites: projectId}},
			{new: true}
		);
		return user;
	}
}

module.exports = UsersService;
