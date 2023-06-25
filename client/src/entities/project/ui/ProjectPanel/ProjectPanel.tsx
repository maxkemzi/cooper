import {FC, ReactNode} from "react";
import {StyledProjectPanel} from "./ProjectPanel.styled";

interface Props {
	contentSlot: ReactNode;
}

const ProjectPanel: FC<Props> = ({contentSlot}) => (
	<StyledProjectPanel>{contentSlot}</StyledProjectPanel>
);

export default ProjectPanel;
