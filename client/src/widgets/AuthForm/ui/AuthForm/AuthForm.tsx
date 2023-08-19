import {LoginForm, SignupForm} from "@features/auth";
import {FC} from "react";
import {ContentStyled} from "./AuthForm.styled";

interface Props {
	isLogin: boolean;
}

const AuthForm: FC<Props> = ({isLogin}) => (
	<ContentStyled>{isLogin ? <LoginForm /> : <SignupForm />}</ContentStyled>
);

export default AuthForm;
