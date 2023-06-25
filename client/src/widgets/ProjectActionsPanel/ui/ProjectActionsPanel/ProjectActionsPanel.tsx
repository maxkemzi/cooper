import {ProjectPanel} from "@entities/project";
import {DeleteProjectButton} from "@features/project/deleteProject";
import {EditProjectButton} from "@features/project/editProject";
import {FC} from "react";

interface Props {
	projectId: string;
}

const ProjectActionsPanel: FC<Props> = ({projectId}) => (
	<ProjectPanel
		contentSlot={
			<>
				<EditProjectButton projectId={projectId} />
				<DeleteProjectButton projectId={projectId} />
			</>
		}
	/>
);

export default ProjectActionsPanel;
