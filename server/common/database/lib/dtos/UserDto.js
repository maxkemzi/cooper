const Dto = require("./Dto");

class UserDto extends Dto {
	constructor(document) {
		super(document);

		const {
			favoriteProjects,
			email,
			username,
			password,
			avatar,
			description,
			location,
			isActivated
		} = document || {};

		this.favoriteProjects = favoriteProjects;
		this.email = email;
		this.password = password;
		this.username = username;
		this.avatar = avatar;
		this.description = description;
		this.location = location;
		this.isActivated = isActivated;
	}
}

module.exports = UserDto;
