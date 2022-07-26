import Avatar from "@components/Avatar/Avatar";
import Layout from "@components/Layout/Layout";
import {Loader} from "@components/Loader";
import Page from "@components/Page/Page";
import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import useWindowSize from "@hooks/useWindowSize";
import AppService from "@services/app/app.service";
import {
	getProfileAvatar,
	getProfileDesc,
	getProfileIsLoading,
	getProfileLocation,
	getProfileProjectsCount,
	getProfileFavorites,
	getProfileUsername
} from "@store/profile/profile.selectors";
import ScreenSizes from "@utils/constants/screenSizes";
import ProfilePageGrid from "@views/Profile/ProfilePage/ProfilePage.styled";
import React, {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ProfileProjectList from "../ProfileProjectList/ProfileProjectList";
import ProfileStatList from "../ProfileStatList/ProfileStatList";

const ProfilePage: FC = () => {
	const {username} = useParams();
	const dispatch = useTypedDispatch();
	const {width} = useWindowSize();

	// Selectors
	const isLoading = useTypedSelector(getProfileIsLoading);
	const avatar = useTypedSelector(getProfileAvatar);
	const description = useTypedSelector(getProfileDesc);
	const location = useTypedSelector(getProfileLocation);
	const projectsCount = useTypedSelector(getProfileProjectsCount);
	const favorites = useTypedSelector(getProfileFavorites);
	const profileUsername = useTypedSelector(getProfileUsername);

	useEffect(() => {
		dispatch(AppService.initializeProfilePage(username));
	}, [dispatch, username]);

	return (
		<Layout>
			<Page>
				{isLoading ? (
					<Loader />
				) : (
					<ProfilePageGrid>
						<Avatar
							width={width <= ScreenSizes.TabletWidth ? "150px" : "200px"}
							height={width <= ScreenSizes.TabletWidth ? "150px" : "200px"}
							imagePath={avatar}
						/>
						<ProfileInfo
							description={description}
							location={location}
							username={profileUsername}
						/>
						<ProfileStatList
							favoritesCount={favorites?.length}
							projectsCount={projectsCount}
						/>
						<ProfileProjectList />
					</ProfilePageGrid>
				)}
			</Page>
		</Layout>
	);
};

export default ProfilePage;
