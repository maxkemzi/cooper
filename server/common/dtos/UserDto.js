class UserDto {
	constructor(data = {}) {
		const {
			id,
			favoriteProjects,
			email,
			username,
			avatar,
			description,
			location,
			isActivated
		} = data;
		this.id = id;
		this.favoriteProjects = favoriteProjects;
		this.email = email;
		this.username = username;
		this.avatar = avatar;
		this.description = description;
		this.location = location;
		this.isActivated = isActivated;
	}
}

export default UserDto;
