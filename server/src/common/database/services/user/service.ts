import {FilterQuery, PopulateOptions} from "mongoose";
import {ManyDataReturn, PaginationOptions} from "../../types";
import User from "./model";
import {
	User as IUser,
	ProjectDocument,
	UserDocument,
	UserPopulatedDocument
} from "../types";

class UserDbService {
	static async activate(
		activationLink: NonNullable<IUser["activationLink"]>
	): Promise<UserDocument | null> {
		const user = await User.findOneAndUpdate(
			{activationLink},
			{isActivated: true},
			{new: true}
		);
		return user;
	}

	static async getFavoriteProjectsById(
		id: string,
		{limit, sort, offset, search}: PaginationOptions = {}
	): Promise<ManyDataReturn<ProjectDocument>> {
		const populateOptions: PopulateOptions = {
			path: "favoriteProjects",
			match: {},
			options: {}
		};
		if (search) {
			populateOptions.match.$or = [
				{title: {$regex: search, $options: "i"}},
				{description: {$regex: search, $options: "i"}}
			];
		}
		if (limit) {
			populateOptions.options.limit = limit;
		}
		if (sort) {
			populateOptions.options.sort = {[sort]: -1};
		}
		if (offset) {
			populateOptions.options.offset = offset;
		}

		const findQuery = User.findById(id)
			.select("favoriteProjects")
			.populate<UserPopulatedDocument>(populateOptions)
			.then(user => user.favoriteProjects || []);
		const countQuery = this.#countFavoriteProjects(id, populateOptions.match);

		const [data, totalCount] = await Promise.all([findQuery, countQuery]);
		return {data, totalCount};
	}

	static async #countFavoriteProjects(
		id: string,
		filter: FilterQuery<ProjectDocument>
	): Promise<number> {
		const user = await User.findById(id)
			.select("favoriteProjects")
			.populate({path: "favoriteProjects", match: filter});

		const count = user.favoriteProjects?.length || 0;
		return count;
	}

	static async addFavoriteProject(
		userId: string,
		projectId: string
	): Promise<UserDocument | null> {
		const user = await User.findByIdAndUpdate(
			userId,
			{$push: {favoriteProjects: projectId}},
			{new: true}
		);
		return user;
	}

	static async removeFavoriteProject(
		userId: string,
		projectId: string
	): Promise<UserDocument | null> {
		const user = await User.findByIdAndUpdate(
			userId,
			{$pull: {favoriteProjects: projectId}},
			{new: true}
		);
		return user;
	}

	static async getByUsername(
		username: NonNullable<IUser["username"]>
	): Promise<UserDocument | null> {
		const user = await User.findOne({username});
		return user;
	}

	static async getByEmail(
		email: NonNullable<IUser["email"]>
	): Promise<UserDocument | null> {
		const user = await User.findOne({email});
		return user;
	}

	static async getById(id: string): Promise<UserDocument | null> {
		const user = await User.findById(id);
		return user;
	}

	static async updateById(
		id: string,
		user: Partial<IUser>
	): Promise<UserDocument | null> {
		const updatedUser = await User.findByIdAndUpdate(id, user, {new: true});
		return updatedUser;
	}

	static async create(user: IUser): Promise<UserDocument> {
		const createdUser = await User.create(user);
		return createdUser;
	}

	static async deleteById(id: string): Promise<UserDocument | null> {
		const user = await User.findByIdAndDelete(id);
		return user;
	}

	static async exists(filter: FilterQuery<UserDocument>): Promise<boolean> {
		const exists = await User.exists(filter);
		return exists;
	}

	static async populate(user: UserDocument): Promise<UserPopulatedDocument> {
		const populatedUser = await User.populate(user, "favoriteProjects");
		return populatedUser as UserPopulatedDocument;
	}

	static async populateMany(
		users: UserDocument[]
	): Promise<UserPopulatedDocument[]> {
		const populatedUsers = await User.populate(users, "favoriteProjects");
		return populatedUsers as UserPopulatedDocument[];
	}
}

export default UserDbService;
