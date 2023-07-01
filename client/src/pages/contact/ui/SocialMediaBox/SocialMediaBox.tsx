import {List, SocialItem, Typography} from "@shared/ui";

const SocialMediaBox = () => (
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
);

export default SocialMediaBox;
