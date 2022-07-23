import Highlight from "@components/Highlight/Highlight";
import Layout from "@components/Layout/Layout";
import Page from "@components/Page/Page";
import Title from "@components/Title/Title";
import React, {FC} from "react";
import CreateForm from "../CreateForm/CreateForm";

const CreatePage: FC = () => (
	<Layout>
		<Page>
			<Title marginBottom="24px" size="large">
				Create <Highlight>project</Highlight>
			</Title>
			<CreateForm />
		</Page>
	</Layout>
);

export default CreatePage;
