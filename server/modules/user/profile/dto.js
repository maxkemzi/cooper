class ProfileDto {
	constructor(data) {
		const {email, username, description, location} = data || {};

		this.email = email;
		this.username = username;
		this.description = description;
		this.location = location;
	}
}

module.exports = ProfileDto;
