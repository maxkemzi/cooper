import Container from "@components/Container/Container";
import Highlight from "@components/Highlight/Highlight";
import Layout from "@components/Layout/Layout";
import Page from "@components/Page/Page";
import Title from "@components/Title/Title";
import React from "react";
import EditProfileForm from "../EditProfileForm/EditProfileForm";

const EditProfilePage = () => (
	<Layout>
		<Page>
			<Container maxWidth="1160px">
				<Title marginBottom="24px" size="large">
					Edit <Highlight>profile</Highlight>
				</Title>
				<EditProfileForm />
			</Container>
		</Page>
	</Layout>
);

export default EditProfilePage;
