import RefreshToken from "./model";
import {RefreshToken as IRefreshToken, RefreshTokenDocument} from "../types";

class RefreshTokenDbService {
	static async saveForUser(
		userId: string,
		token: NonNullable<IRefreshToken["token"]>
	): Promise<RefreshTokenDocument> {
		const refreshToken = await RefreshToken.findOneAndUpdate(
			{user: userId},
			{user: userId, token},
			{new: true, upsert: true}
		);
		return refreshToken;
	}

	static async getByToken(
		token: NonNullable<IRefreshToken["token"]>
	): Promise<RefreshTokenDocument | null> {
		const refreshToken = await RefreshToken.findOne({token});
		return refreshToken;
	}

	static async deleteByToken(
		token: NonNullable<IRefreshToken["token"]>
	): Promise<RefreshTokenDocument | null> {
		const refreshToken = await RefreshToken.findOneAndDelete({token});
		return refreshToken;
	}
}

export default RefreshTokenDbService;
