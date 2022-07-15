import React from "react";
import {
	AboutMeBoxContent,
	StyledAboutMeBox
} from "@views/AboutMe/AboutMeBox/AboutMeBox.styled";
import IdeaBlock from "./IdeaBlock/IdeaBlock";
import SocialBlock from "./SocialBlock/SocialBlock";

const AboutMeBox = () => (
	<StyledAboutMeBox>
		<AboutMeBoxContent>
			<IdeaBlock />
			<SocialBlock />
		</AboutMeBoxContent>
	</StyledAboutMeBox>
);

export default AboutMeBox;
