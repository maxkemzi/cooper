import {List, SocialItem, Typography} from "@shared/ui";
import {ContentStyled, IdeaBlockStyled} from "./AboutMeBox.styled";

const AboutMeBox = () => (
	<ContentStyled>
		<IdeaBlockStyled>
			<Typography variant="h1" mb="lg">
				Project <Typography variant="highlight">idea</Typography>
			</Typography>
			<Typography variant="subtitle1">
				The idea for this social networking site came to me when I was out at 2
				a.m. having coffee trying to think of something worthwhile :)
			</Typography>
		</IdeaBlockStyled>
		<div>
			<Typography variant="h4" mb="lg">
				I&apos;m on social media and services:
			</Typography>
			<List>
				<SocialItem iconName="instagram" to="https://instagram.com/maxkemzi" />
				<SocialItem iconName="telegram" to="https://t.me/maxkemzi" />
				<SocialItem iconName="github" to="https://github.com/Kemzi-coder" />
			</List>
		</div>
	</ContentStyled>
);

export default AboutMeBox;
