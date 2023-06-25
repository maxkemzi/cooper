import {useCustomModalContext} from "@shared/modal";
import {CustomModalContextValue} from "@shared/modal/lib/types";
import {Button} from "@shared/ui";
import {FC} from "react";
import EditForm from "../EditForm/EditForm";

interface Props {
	projectId: string;
}

const EditButton: FC<Props> = ({projectId}) => {
	const {openCustomModal} = useCustomModalContext() as CustomModalContextValue;

	// todo: complete function
	const handleClick = () => {
		openCustomModal({
			modalTitle: "Edit project",
			contentSlot: <EditForm projectId={projectId} />
		});
	};

	return (
		<Button onClick={handleClick} variant="outline" size="sm">
			Edit
		</Button>
	);
};

export default EditButton;
