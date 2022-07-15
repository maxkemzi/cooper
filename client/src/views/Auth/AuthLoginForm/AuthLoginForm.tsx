import Highlight from "@components/Highlight/Highlight";
import Title from "@components/Title/Title";
import React, {Dispatch, FC, SetStateAction} from "react";
import EmailForm from "./EmailForm/EmailForm";
import UsernameForm from "./UsernameForm/UsernameForm";

interface AuthLoginFormProps {
	withUsername: boolean;
	setWithUsername: Dispatch<SetStateAction<boolean>>;
}

const AuthLoginForm: FC<AuthLoginFormProps> = ({
	setWithUsername,
	withUsername
}) => (
	<>
		<Title marginBottom="24px" size="large">
			Log <Highlight>in</Highlight>
		</Title>

		{withUsername ? (
			<UsernameForm setWithUsername={setWithUsername} />
		) : (
			<EmailForm setWithUsername={setWithUsername} />
		)}
	</>
);

export default AuthLoginForm;
