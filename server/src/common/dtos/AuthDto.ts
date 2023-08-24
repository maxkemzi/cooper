import {UserDocument} from "../database/services";
import UserDto from "./UserDto";

type Tokens = {access: string; refresh: string};

class AuthDto {
	user: UserDto;
	tokens: Tokens;

	constructor(data: {user: UserDocument; tokens: Tokens}) {
		this.user = new UserDto(data.user);
		this.tokens = {...data.tokens};
	}
}

export default AuthDto;
