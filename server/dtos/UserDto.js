class UserDto {
	email;

	id;

	isActivated;

	username;

	avatar;

	description;

	saves;

	projectsCount;

	constructor(model) {
		this.email = model.email;
		this.username = model.username;
		this.id = model._id;
		this.description = model.description;
		this.avatar = model.avatar;
		this.isActivated = model.isActivated;
		this.saves = model.saves;
		this.projectsCount = model.projectsCount;
	}
}

module.exports = UserDto;
