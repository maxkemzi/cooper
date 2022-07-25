import Container from "@components/Container/Container";
import Highlight from "@components/Highlight/Highlight";
import Layout from "@components/Layout/Layout";
import Page from "@components/Page/Page";
import Title from "@components/Title/Title";
import useWindowSize from "@hooks/useWindowSize";
import ScreenSizes from "@utils/constants/screenSizes";
import React from "react";
import EditProfileForm from "../EditProfileForm/EditProfileForm";

const EditProfilePage = () => {
	const {width} = useWindowSize();
	return (
		<Layout>
			<Page>
				<Container maxWidth="1160px">
					<Title
						marginBottom={width <= ScreenSizes.TabletWidth ? "12px" : "24px"}
						size="large"
					>
						Edit <Highlight>profile</Highlight>
					</Title>
					<EditProfileForm />
				</Container>
			</Page>
		</Layout>
	);
};

export default EditProfilePage;
