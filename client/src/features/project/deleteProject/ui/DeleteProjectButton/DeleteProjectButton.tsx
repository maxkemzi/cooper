import {useGlobalModalContext} from "@shared/modal";
import {GlobalModalContextValue} from "@shared/modal/lib/types";
import {useTypedDispatch} from "@shared/model";
import {Icon} from "@shared/ui";
import {FC} from "react";
import deleteProjectThunk from "../../model/thunks/deleteProjectThunk";
import {DeleteProjectButtonStyled} from "./DeleteProjectButton.styled";

interface Props {
	projectId: string;
}

const DeleteProjectButton: FC<Props> = ({projectId}) => {
	const dispatch = useTypedDispatch();
	const {openGlobalModal, closeGlobalModal} =
		useGlobalModalContext() as GlobalModalContextValue;

	const handleDelete = () => {
		dispatch(deleteProjectThunk(projectId));
		closeGlobalModal();
	};

	const handleClick = () => {
		openGlobalModal({
			variant: "confirm",
			props: {
				title: "Delete project",
				message: "Are you sure you want to delete this project?",
				onConfirm: handleDelete
			}
		});
	};

	return (
		<DeleteProjectButtonStyled onClick={handleClick}>
			<Icon name="close" />
		</DeleteProjectButtonStyled>
	);
};

export default DeleteProjectButton;
