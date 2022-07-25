import {User} from "@customTypes/entities";

interface AuthResponse {
	accessToken: string;
	refreshToken: string;
	user: User;
}

export default AuthResponse;
