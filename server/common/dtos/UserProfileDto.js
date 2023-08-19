class UserProfileDto {
	constructor(data = {}) {
		const {avatar, username, description, location, createdDate} = data;
		this.username = username;
		this.avatar = avatar;
		this.description = description;
		this.location = location;
		this.createdDate = createdDate;
	}
}

export default UserProfileDto;
