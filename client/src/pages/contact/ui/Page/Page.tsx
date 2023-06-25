import {ContactForm} from "@features/contact";
import AboutMeBox from "../AboutMeBox/AboutMeBox";
import {Content, Section} from "./Page.styled";

const Page = () => (
	<Content>
		<Section>
			<AboutMeBox />
		</Section>
		<Section>
			<ContactForm />
		</Section>
	</Content>
);

export default Page;
