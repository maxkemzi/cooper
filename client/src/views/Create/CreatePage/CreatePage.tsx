import React, {FC} from "react";
import Page from "@components/Page/Page";
import Highlight from "@components/Highlight/Highlight";
import CreatePageTitle from "./CreatePage.styled";

const CreatePage: FC = () => (
	<Page>
		<CreatePageTitle size="large">
			Create <Highlight>project</Highlight>
		</CreatePageTitle>
	</Page>
);

export default CreatePage;
