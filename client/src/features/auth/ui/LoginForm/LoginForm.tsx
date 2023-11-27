import {Typography} from "@shared/ui";
import {FC, useState} from "react";
import LoginWithEmailForm from "../LoginWithEmailForm/LoginWithEmailForm";
import LoginWithUsernameForm from "../LoginWithUsernameForm/LoginWithUsernameForm";

const LoginForm: FC = () => {
	const [withUsername, setWithUsername] = useState(false);

	const handleLoginOptionButtonClick = () => setWithUsername(prev => !prev);

	return (
		<>
			<Typography variant="h1" mb="lg">
				Log <Typography variant="highlight">in</Typography>
			</Typography>

			{withUsername ? (
				<LoginWithUsernameForm
					onLoginOptionButtonClick={handleLoginOptionButtonClick}
				/>
			) : (
				<LoginWithEmailForm
					onLoginOptionButtonClick={handleLoginOptionButtonClick}
				/>
			)}
		</>
	);
};

export default LoginForm;
