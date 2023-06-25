enum RouteNames {
	// Public
	Home = "/",
	Login = "/login",
	Signup = "/signup",
	Projects = "/projects",
	Contact = "/contact",
	Profile = "/profile",
	// Private (only for authenticated users)
	EditProfile = "/edit-profile",
	YourProjects = "/your-projects",
	FavoriteProjects = "/favorite-projects",
	YourProfile = "/your-profile",
	Create = "/create"
}

export default RouteNames;
