import {Project, ProjectPanel} from "@entities/project";
import {DeleteProjectButton} from "@features/project/deleteProject";
import {EditProjectButton} from "@features/project/editProject";
import {FC} from "react";

interface Props {
	project: Project;
}

const ProjectActionsPanel: FC<Props> = ({project}) => (
	<ProjectPanel
		contentSlot={
			<>
				<EditProjectButton project={project} />
				<DeleteProjectButton projectId={project.id} />
			</>
		}
	/>
);

export default ProjectActionsPanel;
