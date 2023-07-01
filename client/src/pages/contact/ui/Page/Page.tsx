import {ContactForm} from "@features/contact";
import ProjectIdeaBox from "../ProjectIdeaBox/ProjectIdeaBox";
import {
	ContactContentStyled,
	GridContainer,
	IdeaContentStyled,
	SocialContentStyled
} from "./Page.styled";
import SocialMediaBox from "../SocialMediaBox/SocialMediaBox";

const Page = () => (
	<GridContainer>
		<IdeaContentStyled>
			<ProjectIdeaBox />
		</IdeaContentStyled>
		<ContactContentStyled>
			<ContactForm />
		</ContactContentStyled>
		<SocialContentStyled>
			<SocialMediaBox />
		</SocialContentStyled>
	</GridContainer>
);

export default Page;
