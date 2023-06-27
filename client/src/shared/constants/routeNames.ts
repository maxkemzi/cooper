enum RouteName {
	// Public
	HOME = "/",
	LOGIN = "/login",
	SIGNUP = "/signup",
	PROJECTS = "/projects",
	CONTACT = "/contact",
	PROFILE = "/profile",
	// Private (only for authenticated users)
	EDIT_PROFILE = "/edit-profile",
	YOUR_PROJECTS = "/your-projects",
	FAVORITE_PROJECTS = "/favorite-projects",
	YOUR_PROFILE = "/your-profile",
	CREATE = "/create"
}

export default RouteName;
