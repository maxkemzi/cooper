class UserToProfileDto {
	constructor(user) {
		const {username, avatar, description, location, createdDate} = user || {};

		this.username = username;
		this.avatar = avatar;
		this.description = description;
		this.location = location;
		this.createdDate = createdDate;
	}
}

export default UserToProfileDto;
