import {MarginProps} from "@customTypes/styled";
import styled, {css} from "styled-components";

interface FormFieldProps extends MarginProps {
	isInvalid: boolean;
}

export const StyledFormField = styled.div<FormFieldProps>`
	margin-bottom: ${({marginBottom}) => marginBottom};
	margin-top: ${({marginTop}) => marginTop};
	margin-left: ${({marginLeft}) => marginLeft};
	margin-right: ${({marginRight}) => marginRight};
	position: relative;

	&::before {
		content: "";
		position: absolute;
		left: -8px;
		top: 0;
		background: ${({theme}) => theme.colors.danger};
		width: 2px;
		height: 0;
		transition: height ${({theme}) => theme.transitionBase};
	}

	${({isInvalid}) =>
		isInvalid &&
		css`
			&::before {
				height: 100%;
			}
		`}
`;

export const FormFieldLabel = styled.label`
	color: ${({theme}) => theme.colors.danger};
	font-size: 14px;
`;
