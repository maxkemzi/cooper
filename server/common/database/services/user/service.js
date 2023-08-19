import User from "./model";
import {ProjectPopulator} from "../../populators";

class UserDbService {
	static async activate(activationLink) {
		const user = await User.findOneAndUpdate(
			{activationLink},
			{isActivated: true},
			{new: true}
		);
		return user;
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
		return {projects, totalCount};
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
		return user;
	}

	static async removeFavoriteProject(userId, projectId) {
		const user = await User.findByIdAndUpdate(
			userId,
			{$pull: {favoriteProjects: projectId}},
			{new: true}
		);
		return user;
	}

	static async getByUsername(username) {
		const user = await User.findOne({username});
		return user;
	}

	static async getByEmail(email) {
		const user = await User.findOne({email});
		return user;
	}

	static async getById(id) {
		const user = await User.findById(id);
		return user;
	}

	static async updateById(id, payload) {
		const user = await User.findByIdAndUpdate(id, payload, {new: true});
		return user;
	}

	static async create(payload) {
		const user = await User.create(payload);
		return user;
	}

	static async deleteById(id) {
		const user = await User.findByIdAndDelete(id);
		return user;
	}

	static async exists(filter = {}) {
		const exists = await User.exists(filter);
		return exists;
	}
}

export default UserDbService;
