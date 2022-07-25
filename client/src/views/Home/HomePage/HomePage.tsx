import Button from "@components/Button/Button";
import Highlight from "@components/Highlight/Highlight";
import Layout from "@components/Layout/Layout";
import Page from "@components/Page/Page";
import Text from "@components/Text/Text";
import Title from "@components/Title/Title";
import useWindowSize from "@hooks/useWindowSize";
import {SIGNUP_ROUTE} from "@utils/constants/routeNames";
import ScreenSizes from "@utils/constants/screenSizes";
import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import {HomePageContent, HomePagePlanetImage} from "./HomePage.styled";

const HomePage: FC = () => {
	const {width} = useWindowSize();
	return (
		<Layout isHeaderAbsolute>
			<Page isFullscreen>
				<HomePageContent>
					<Title
						size="large"
						marginBottom={width <= ScreenSizes.TabletWidth ? "12px" : "24px"}
					>
						Find your <br /> <Highlight>dream team!</Highlight>
					</Title>
					<Text
						size="large"
						marginBottom={width <= ScreenSizes.TabletWidth ? "32px" : "64px"}
					>
						Cooper will help you find a team to create a project or participate
						in an existing one.
					</Text>
					<NavLink to={SIGNUP_ROUTE}>
						<Button size="large">GET STARTED</Button>
					</NavLink>
				</HomePageContent>
				{width >= 930 && <HomePagePlanetImage />}
			</Page>
		</Layout>
	);
};

export default HomePage;
