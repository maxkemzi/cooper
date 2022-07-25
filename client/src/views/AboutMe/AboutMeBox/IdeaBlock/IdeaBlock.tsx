import Highlight from "@components/Highlight/Highlight";
import Text from "@components/Text/Text";
import Title from "@components/Title/Title";
import useWindowSize from "@hooks/useWindowSize";
import ScreenSizes from "@utils/constants/screenSizes";
import {AboutMeIdeaBlock} from "@views/AboutMe/AboutMeBox/AboutMeBox.styled";
import React from "react";

const IdeaBlock = () => {
	const {width} = useWindowSize();
	return (
		<AboutMeIdeaBlock>
			<Title
				marginBottom={width <= ScreenSizes.TabletWidth ? "12px" : "24px"}
				size="large"
			>
				Project <Highlight>idea</Highlight>
			</Title>
			<Text size="large">
				The idea for this social networking site came to me when I was out at 2
				a.m. having coffee trying to think of something worthwhile :)
			</Text>
		</AboutMeIdeaBlock>
	);
};

export default IdeaBlock;
