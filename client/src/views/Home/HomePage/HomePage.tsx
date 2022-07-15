import Button from "@components/Button/Button";
import Highlight from "@components/Highlight/Highlight";
import Page from "@components/Page/Page";
import Text from "@components/Text/Text";
import Title from "@components/Title/Title";
import {SIGNUP_ROUTE} from "@utils/constants/routeNames";
import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import {HomePageContent, HomePagePlanetImage} from "./HomePage.styled";

const HomePage: FC = () => (
	<Page isFullscreen>
		<HomePageContent>
			<Title size="large" marginBottom="24px">
				Find your <br /> <Highlight>dream team!</Highlight>
			</Title>
			<Text size="large" marginBottom={64}>
				Cooper will help you find a team to create a project or participate in
				an existing one.
			</Text>
			<NavLink to={SIGNUP_ROUTE}>
				<Button size="large">GET STARTED</Button>
			</NavLink>
		</HomePageContent>
		<HomePagePlanetImage />
	</Page>
);

export default HomePage;
