class UserDto {
	email;

	id;

	isActivated;

	username;

	avatar;

	description;

	favorites;

	projectsCount;

	location;

	constructor(model) {
		this.email = model.email;
		this.username = model.username;
		this.id = model._id;
		this.description = model.description;
		this.avatar = model.avatar;
		this.isActivated = model.isActivated;
		this.favorites = model.favorites;
		this.projectsCount = model.projectsCount;
		this.location = model.location;
	}
}

module.exports = UserDto;
