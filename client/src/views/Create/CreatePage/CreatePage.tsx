import Highlight from "@components/Highlight/Highlight";
import Layout from "@components/Layout/Layout";
import Page from "@components/Page/Page";
import Title from "@components/Title/Title";
import useWindowSize from "@hooks/useWindowSize";
import ScreenSizes from "@utils/constants/screenSizes";
import React, {FC} from "react";
import CreateForm from "../CreateForm/CreateForm";

const CreatePage: FC = () => {
	const {width} = useWindowSize();
	return (
		<Layout>
			<Page>
				<Title
					marginBottom={width <= ScreenSizes.TabletWidth ? "12px" : "24px"}
					size="large"
				>
					Create <Highlight>project</Highlight>
				</Title>
				<CreateForm />
			</Page>
		</Layout>
	);
};

export default CreatePage;
