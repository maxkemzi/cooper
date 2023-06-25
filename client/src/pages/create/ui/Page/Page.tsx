import {withAuthProtection} from "@features/auth";
import {CreateProjectForm} from "@features/project/createProject";
import {Typography} from "@shared/ui";
import {FC} from "react";

const Page: FC = () => (
	<>
		<Typography variant="h1" mb="lg">
			Create <Typography variant="highlight">project</Typography>
		</Typography>
		<CreateProjectForm />
	</>
);

export default withAuthProtection(Page);
