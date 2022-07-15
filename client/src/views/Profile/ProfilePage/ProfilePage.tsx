import Avatar from "@components/Avatar/Avatar";
import Button from "@components/Button/Button";
import {Loader, LoaderWrapper} from "@components/Loader";
import Page from "@components/Page/Page";
import {
	ProfilePageBtns,
	ProfilePageChatBtn,
	ProfilePageGrid,
	ProfilePageHeader,
	ProfilePageLocation,
	ProfilePageUsername
} from "@views/Profile/ProfilePage/ProfilePage.styled";
import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import UsersService from "@services/users/users.service";
import React, {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import StatItem from "@components/StatItem/StatItem";
import {ReactComponent as LocationIcon} from "@images/profile/location.svg";

const ProfilePage: FC = () => {
	const {username} = useParams();
	const dispatch = useTypedDispatch();
	const profile = useTypedSelector(state => state.profileState.profile);
	const isLoading = useTypedSelector(state => state.profileState.isLoading);

	useEffect(() => {
		dispatch(UsersService.fetchOneByUsername(username));
	}, [dispatch, username]);

	if (isLoading) {
		return (
			<LoaderWrapper>
				<Loader />
			</LoaderWrapper>
		);
	}

	return (
		<Page>
			<ProfilePageGrid>
				<Avatar width={200} height={200} imagePath={profile.avatar} />
				<ProfilePageHeader>
					<div>
						<ProfilePageUsername>{profile.username}</ProfilePageUsername>
						<ProfilePageLocation>
							<LocationIcon />
							{profile.location}
						</ProfilePageLocation>
						<p>{profile.description}</p>
					</div>
					<ProfilePageBtns>
						<ProfilePageChatBtn type="button">Chat</ProfilePageChatBtn>
						<Button variant="outline">Follow</Button>
					</ProfilePageBtns>
				</ProfilePageHeader>
				<aside>
					<div>
						<StatItem title="followers" value={profile.projectsCount} />
						<StatItem title="projects" value={profile.projectsCount} />
					</div>
					<div />
					<div />
				</aside>
				<div>Content</div>
			</ProfilePageGrid>
		</Page>
	);
};

export default ProfilePage;
