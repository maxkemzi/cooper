import {withAuthProtection} from "@features/auth";
import {EditProfileForm} from "@features/profile/editProfile";
import {Typography} from "@shared/ui";

const Page = () => (
	<>
		<Typography variant="h1" mb="lg">
			Edit <Typography variant="highlight">profile</Typography>
		</Typography>
		<EditProfileForm />
	</>
);

export default withAuthProtection(Page);
