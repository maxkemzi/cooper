import React, {FC} from "react";
import Page from "@components/Page/Page";
import AboutMePageInner from "@views/AboutMe/AboutMePage/AboutMePage.styled";
import Layout from "@components/Layout/Layout";
import AboutMeBox from "../AboutMeBox/AboutMeBox";
import ContactForm from "../ContactForm/ContactForm";

const AboutMePage: FC = () => (
	<Layout>
		<Page>
			<AboutMePageInner>
				<AboutMeBox />
				<ContactForm />
			</AboutMePageInner>
		</Page>
	</Layout>
);

export default AboutMePage;
