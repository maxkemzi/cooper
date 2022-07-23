import Layout from "@components/Layout/Layout";
import {Loader, LoaderWrapper} from "@components/Loader";
import Page from "@components/Page/Page";
import Text from "@components/Text/Text";
import Title from "@components/Title/Title";
import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import ProjectsService from "@services/projects/projects.service";
import {
	getProjectBudget,
	getProjectCategories,
	getProjectCreatorCreatedDate,
	getProjectCreatorProjectsCount,
	getProjectDesc,
	getProjectIsLoading,
	getProjectTitle,
	getProjectWorkType
} from "@store/project/project.selectors";
import {
	ProjectPageInner,
	ProjectPageSection
} from "@views/Project/ProjectPage/ProjectPage.styled";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import ProjectCategories from "../ProjectCategories/ProjectCategories";
import ProjectCreatorInfo from "../ProjectCreatorInfo/ProjectCreatorInfo";
import ProjectInfoItems from "../ProjectInfoItems/ProjectInfoItems";

const ProjectPage = () => {
	const {id} = useParams();
	const dispatch = useTypedDispatch();

	// Selectors
	const isLoading = useTypedSelector(getProjectIsLoading);
	const title = useTypedSelector(getProjectTitle);
	const description = useTypedSelector(getProjectDesc);
	const workType = useTypedSelector(getProjectWorkType);
	const budget = useTypedSelector(getProjectBudget);
	const categories = useTypedSelector(getProjectCategories);
	const creatorProjectsCount = useTypedSelector(getProjectCreatorProjectsCount);
	const creatorCreatedDate = useTypedSelector(getProjectCreatorCreatedDate);

	useEffect(() => {
		dispatch(ProjectsService.fetchOneById(id));
	}, [dispatch, id]);

	if (isLoading) {
		return (
			<LoaderWrapper>
				<Loader />
			</LoaderWrapper>
		);
	}

	return (
		<Layout>
			<Page>
				<ProjectPageInner>
					<ProjectPageSection>
						<Title size="large">{title}</Title>
					</ProjectPageSection>
					<ProjectPageSection>
						<Text>{description}</Text>
					</ProjectPageSection>
					<ProjectInfoItems infoItems={{workType, budget}} />
					{categories.length !== 0 && (
						<ProjectCategories categories={categories} />
					)}
					<ProjectCreatorInfo
						infoItems={{
							location: "Ukraine",
							"projects count": creatorProjectsCount
						}}
						createdDate={creatorCreatedDate}
					/>
				</ProjectPageInner>
			</Page>
		</Layout>
	);
};

export default ProjectPage;
