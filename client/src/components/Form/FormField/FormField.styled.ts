import styled, {css} from "styled-components";

interface FormFieldProps {
	isInvalid: boolean;
}

export const StyledFormField = styled.div<FormFieldProps>`
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
