import {Form, FormStatus} from "@shared/form";
import styled from "styled-components";

const AuthForm = styled(Form)`
	margin-bottom: ${({theme}) => theme.spacing.md};
`;

const AuthFormStatus = styled(FormStatus)`
	margin-bottom: ${({theme}) => theme.spacing.md};
`;

const AuthFormFields = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: ${({theme}) => theme.spacing.lg};
	row-gap: ${({theme}) => theme.spacing.lg};
`;

export {AuthForm, AuthFormFields, AuthFormStatus};
