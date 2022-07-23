import ConfirmModal from "@components/ConfirmModal/ConfirmModal";
import Modal from "@components/Modal/Modal";
import {Project} from "@customTypes/entities";
import {EditProjectFormValues} from "@customTypes/forms";
import useConfirmModal from "@hooks/useConfirmModal";
import useModalWithData from "@hooks/useModalWithData";
import ProjectItemSkeleton from "@skeletons/ProjectItemSkeleton/ProjectItemSkeleton";
import FallbackMsgs from "@utils/constants/fallbackMsgs";
import {YOUR_PROJECTS_ROUTE} from "@utils/constants/routeNames";
import React, {FC} from "react";
import {useLocation} from "react-router-dom";
import ProjectEditForm from "./ProjectEditForm/ProjectEditForm";
import ProjectItem from "./ProjectItem/ProjectItem";
import {StyledProjectList} from "./ProjectList.styled";

interface ProjectListProps {
	projects: Project[];
	isLoading: boolean;
}

const ProjectList: FC<ProjectListProps> = ({projects, isLoading}) => {
	const location = useLocation();
	const confirmModal = useConfirmModal();
	const editModal = useModalWithData<EditProjectFormValues>(false, {
		id: 1,
		budget: 0,
		categories: [],
		description: "",
		title: "",
		workType: "default",
		visibility: "public"
	});

	if (projects.length === 0 && !isLoading) {
		return <p>{FallbackMsgs.ProjectList}</p>;
	}

	return (
		<>
			<ConfirmModal
				title="Confirmation"
				isOpen={confirmModal.isModalOpen}
				onClose={() => confirmModal.setIsModalOpen(false)}
				onConfirm={confirmModal.onConfirm}
			>
				Are you sure you want to delete this project?
			</ConfirmModal>
			<Modal
				width="400px"
				title="Edit project"
				isOpen={editModal.isModalOpen}
				onClose={() => editModal.setIsModalOpen(false)}
			>
				<ProjectEditForm
					setIsModalOpen={editModal.setIsModalOpen}
					data={editModal.data}
				/>
			</Modal>
			<StyledProjectList>
				{isLoading
					? [1, 2, 3, 4, 5, 6].map(n => <ProjectItemSkeleton key={n} />)
					: projects.map(project => (
							<ProjectItem
								key={project._id}
								id={project._id}
								workType={project.workType}
								budget={project.budget}
								categories={project.categories}
								title={project.title}
								description={project.description}
								creator={project.creator}
								createdDate={project.createdDate}
								superMode={location.pathname === YOUR_PROJECTS_ROUTE}
								confirmModal={confirmModal}
								editModal={editModal}
								visibility={project.visibility}
							/>
					  ))}
			</StyledProjectList>
		</>
	);
};

export default ProjectList;
