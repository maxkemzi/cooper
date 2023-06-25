import {Typography} from "@shared/ui";
import {FC, MouseEvent, useState} from "react";
import LoginWithEmailForm from "../LoginWithEmailForm/LoginWithEmailForm";
import LoginWithUsernameForm from "../LoginWithUsernameForm/LoginWithUsernameForm";

const LoginForm: FC = () => {
	const [withUsername, setWithUsername] = useState(false);

	const handleLoginOptionButtonClick = (e: MouseEvent) => {
		e.preventDefault();
		setWithUsername(prev => !prev);
	};

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
