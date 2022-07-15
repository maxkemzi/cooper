import React, {FC} from "react";
import Page from "@components/Page/Page";
import AboutMePageInner from "@views/AboutMe/AboutMePage/AboutMePage.styled";
import AboutMeBox from "../AboutMeBox/AboutMeBox";
import ContactForm from "../ContactForm/ContactForm";

const AboutMePage: FC = () => (
	<Page isFullscreen>
		<AboutMePageInner>
			<AboutMeBox />
			<ContactForm />
		</AboutMePageInner>
	</Page>
);

export default AboutMePage;
