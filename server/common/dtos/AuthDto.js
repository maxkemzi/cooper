import UserDto from "./UserDto";

class AuthDto {
	constructor(data = {}) {
		const {user, tokens} = data;
		this.user = new UserDto(user);
		this.tokens = {...tokens};
	}
}

export default AuthDto;
