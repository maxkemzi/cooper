import Button from "@components/Button/Button";
import DeleteButton from "@components/DeleteButton/DeleteButton";
import {EditProjectFormValues} from "@customTypes/forms";
import useToast from "@hooks/useToast";
import useTypedDispatch from "@hooks/useTypedDispatch";
import ProjectsService from "@services/projects/projects.service";
import React, {Dispatch, FC, memo, SetStateAction} from "react";
import StyledProjectItemPanel from "./ProjectItemPanel.styled";

interface ProjectItemPanelProps {
	id: string | number;
	confirmModal: {
		setIsModalOpen: Dispatch<SetStateAction<boolean>>;
		setOnConfirm: Dispatch<SetStateAction<() => void>>;
	};
	editModal: {
		setData: Dispatch<SetStateAction<EditProjectFormValues>>;
		setIsModalOpen: Dispatch<SetStateAction<boolean>>;
	};
	editData: EditProjectFormValues;
}

const ProjectItemPanel: FC<ProjectItemPanelProps> = memo(
	({id, confirmModal, editModal, editData}) => {
		const dispatch = useTypedDispatch();
		const {showToast} = useToast();

		const handleSuccess: () => void = () =>
			showToast("success", "Project deleted.");

		const handleError: () => void = () =>
			showToast("danger", "Something went wrong.");

		const handleDelete = () =>
			dispatch(ProjectsService.deleteOne(id, {handleError, handleSuccess}));

		return (
			<StyledProjectItemPanel>
				<Button
					marginRight="24px"
					onClick={() => {
						editModal.setIsModalOpen(true);
						editModal.setData(editData);
					}}
					variant="outline"
					size="small"
				>
					Edit
				</Button>
				<DeleteButton
					onClick={() => {
						confirmModal.setIsModalOpen(true);
						confirmModal.setOnConfirm(() => handleDelete);
					}}
				/>
			</StyledProjectItemPanel>
		);
	}
);

export default ProjectItemPanel;
