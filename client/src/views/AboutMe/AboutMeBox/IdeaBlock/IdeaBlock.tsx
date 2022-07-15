import Highlight from "@components/Highlight/Highlight";
import Text from "@components/Text/Text";
import Title from "@components/Title/Title";
import {AboutMeIdeaBlock} from "@views/AboutMe/AboutMeBox/AboutMeBox.styled";
import React from "react";

const IdeaBlock = () => (
	<AboutMeIdeaBlock>
		<Title marginBottom="24px" size="large">
			Project <Highlight>idea</Highlight>
		</Title>
		<Text size="large">
			The idea for this social networking site came to me when I was out at 2
			a.m. having coffee trying to think of something worthwhile :)
		</Text>
	</AboutMeIdeaBlock>
);

export default IdeaBlock;
