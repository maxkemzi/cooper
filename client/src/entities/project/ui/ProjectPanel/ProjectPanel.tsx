import {FC, ReactNode} from "react";
import {ProjectPanelStyled} from "./ProjectPanel.styled";

interface Props {
	contentSlot: ReactNode;
}

const ProjectPanel: FC<Props> = ({contentSlot}) => (
	<ProjectPanelStyled>{contentSlot}</ProjectPanelStyled>
);

export default ProjectPanel;
