import RefreshToken from "./model";
import RefreshTokenDto from "../lib/dtos/RefreshTokenDto";

class RefreshTokenService {
	static async saveForUser(userId, token) {
		const refreshToken = await RefreshToken.updateOne(
			{user: userId},
			{user: userId, token},
			{new: true, upsert: true}
		);

		return RefreshTokenDto.fromDocument(refreshToken);
	}

	static async getByToken(token) {
		const refreshToken = await RefreshToken.findOne({token});

		return RefreshTokenDto.fromDocument(refreshToken);
	}

	static async deleteByToken(token) {
		const refreshToken = await RefreshToken.deleteOne({token});

		return RefreshTokenDto.fromDocument(refreshToken);
	}
}

export default RefreshTokenService;
