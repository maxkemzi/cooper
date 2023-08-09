import User from "./model";
import UserDto from "../lib/dtos/UserDto";
import ProjectDto from "../lib/dtos/ProjectDto";
import ProjectPopulator from "../lib/populators/ProjectPopulator";
import {ErrorThrower} from "../../error";

class UserService {
	static async activate(activationLink) {
		const user = await User.findOneAndUpdate(
			{activationLink},
			{isActivated: true},
			{new: true}
		);

		if (!user) {
			ErrorThrower.throwBadRequest("Wrong activation link!");
		}

		return UserDto.fromDocument(user);
	}

	static async getFavoriteProjectsById(id, {limit, sort, offset, search}) {
		const filter = {};

		if (search) {
			filter.$or = [
				{title: {$regex: search, $options: "i"}},
				{description: {$regex: search, $options: "i"}}
			];
		}

		const findQuery = User.findById(id)
			.select("favoriteProjects")
			.populate({
				path: "favoriteProjects",
				match: filter,
				options: {limit, sort: {[sort]: -1}, offset},
				populate: ProjectPopulator.populateOptions
			})
			.then(user => user.favoriteProjects);

		const countQuery = this.#countFavoriteProjects(id, filter);

		const [projects, totalCount] = await Promise.all([findQuery, countQuery]);

		return {projects: ProjectDto.fromDocuments(projects), totalCount};
	}

	static async #countFavoriteProjects(id, filter = {}) {
		const count = await User.findById(id)
			.select("favoriteProjects")
			.populate({path: "favoriteProjects", match: filter})
			.then(user => user.favoriteProjects.length);

		return count;
	}

	static async addFavoriteProject(userId, projectId) {
		const user = await User.findByIdAndUpdate(
			userId,
			{$push: {favoriteProjects: projectId}},
			{new: true}
		);

		return UserDto.fromDocument(user);
	}

	static async removeFavoriteProject(userId, projectId) {
		const user = await User.findByIdAndUpdate(
			userId,
			{$pull: {favoriteProjects: projectId}},
			{new: true}
		);

		return UserDto.fromDocument(user);
	}

	static async getByUsername(username) {
		const user = await User.findOne({username});

		return UserDto.fromDocument(user);
	}

	static async getByEmail(email) {
		const user = await User.findOne({email});

		return UserDto.fromDocument(user);
	}

	static async getById(id) {
		const user = await User.findById(id);

		return UserDto.fromDocument(user);
	}

	static async updateById(id, payload) {
		const user = await User.findByIdAndUpdate(id, payload, {new: true});

		return UserDto.fromDocument(user);
	}

	static async create(payload) {
		const user = await User.create(payload);

		return UserDto.fromDocument(user);
	}

	static async deleteById(id) {
		const user = await User.findByIdAndDelete(id);

		return UserDto.fromDocument(user);
	}

	static async exists(filter = {}) {
		const exists = await User.exists(filter);

		return exists;
	}
}

export default UserService;
