import Avatar from "@components/Avatar/Avatar";
import {Loader} from "@components/Loader";
import Page from "@components/Page/Page";
import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import AppService from "@services/app/app.service";
import {
	ProfilePageGrid,
	ProfilePageHeader
} from "@views/Profile/ProfilePage/ProfilePage.styled";
import React, {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import ProfileButtons from "../ProfileButtons/ProfileButtons";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ProfileProjectList from "../ProfileProjectList/ProfileProjectList";
import ProfileStatList from "../ProfileStatList/ProfileStatList";

const ProfilePage: FC = () => {
	const {username} = useParams();
	const dispatch = useTypedDispatch();
	const authUsername = useTypedSelector(state => state.authState.user.username);
	const profile = useTypedSelector(state => state.profileState.profile);
	const isLoading = useTypedSelector(state => state.profileState.isLoading);

	// Check if profile belongs to authenticated user
	const belongsToAuthUser = authUsername === username;

	useEffect(() => {
		dispatch(AppService.initializeProfilePage(username));
	}, [dispatch, username]);

	return (
		<Page>
			{isLoading ? (
				<Loader />
			) : (
				<ProfilePageGrid>
					<Avatar width="200px" height="200px" imagePath={profile.avatar} />
					<ProfilePageHeader>
						<ProfileInfo
							description={profile.description}
							location={profile.location}
							username={profile.username}
						/>
						<ProfileButtons belongsToAuthUser={belongsToAuthUser} />
					</ProfilePageHeader>
					<ProfileStatList projectsCount={profile.projectsCount} />
					<ProfileProjectList />
				</ProfilePageGrid>
			)}
		</Page>
	);
};

export default ProfilePage;
