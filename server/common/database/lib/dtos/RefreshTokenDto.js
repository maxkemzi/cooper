import Dto from "./Dto";

class RefreshTokenDto extends Dto {
	constructor(document) {
		super(document);

		const {token, user} = document || {};

		this.token = token;
		this.user = user;
	}
}

export default RefreshTokenDto;
