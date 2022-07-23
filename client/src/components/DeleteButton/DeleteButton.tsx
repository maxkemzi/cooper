import CrossIcon from "@icons/CrossIcon/CrossIcon";
import React, {ButtonHTMLAttributes, FC, memo} from "react";
import StyledDeleteButton from "./DeleteButton.styled";

const DeleteButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = memo(
	props => (
		<StyledDeleteButton type="button" {...props}>
			<CrossIcon />
		</StyledDeleteButton>
	)
);

export default DeleteButton;
