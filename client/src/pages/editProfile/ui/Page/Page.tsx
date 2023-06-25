import {withAuthProtection} from "@features/auth";
import {EditProfileForm} from "@features/profile/editProfile";
import {Typography} from "@shared/ui";
import {FormContentStyled} from "./Page.styled";

const Page = () => (
	<div>
		<Typography variant="h1" mb="lg">
			Edit <Typography variant="highlight">profile</Typography>
		</Typography>
		<FormContentStyled>
			<EditProfileForm />
		</FormContentStyled>
	</div>
);

export default withAuthProtection(Page);
