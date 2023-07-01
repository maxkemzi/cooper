import {Project, ProjectPanel} from "@entities/project";
import {DeleteProjectButton} from "@features/project/deleteProject";
import {EditProjectButton} from "@features/project/editProject";
import {List} from "@shared/ui";
import {FC} from "react";

interface Props {
	project: Project;
}

const ProjectActionsPanel: FC<Props> = ({project}) => (
	<ProjectPanel
		contentSlot={
			<List noWrap gap="lg" ml="auto">
				<EditProjectButton project={project} />
				<DeleteProjectButton projectId={project.id} />
			</List>
		}
	/>
);

export default ProjectActionsPanel;
