import RefreshToken from "./model";

class RefreshTokenDbService {
	static async saveForUser(userId, token) {
		const refreshToken = await RefreshToken.updateOne(
			{user: userId},
			{user: userId, token},
			{new: true, upsert: true}
		);
		return refreshToken;
	}

	static async getByToken(token) {
		const refreshToken = await RefreshToken.findOne({token});
		return refreshToken;
	}

	static async deleteByToken(token) {
		const refreshToken = await RefreshToken.deleteOne({token});
		return refreshToken;
	}
}

export default RefreshTokenDbService;
