import {Project} from "@entities/project";
import {useCustomModalContext} from "@shared/modal";
import {CustomModalContextValue} from "@shared/modal/lib/types";
import {Button} from "@shared/ui";
import {FC} from "react";
import EditProjectForm from "../EditProjectForm/EditProjectForm";

interface Props {
	project: Project;
}

const EditProjectButton: FC<Props> = ({project}) => {
	const {openCustomModal, closeCustomModal} =
		useCustomModalContext() as CustomModalContextValue;

	// todo: complete function
	const handleClick = () => {
		openCustomModal({
			props: {
				modalTitle: "Edit project",
				contentSlot: (
					<EditProjectForm project={project} onSubmit={closeCustomModal} />
				)
			}
		});
	};

	return (
		<Button onClick={handleClick} variant="outline" size="sm">
			Edit
		</Button>
	);
};

export default EditProjectButton;
