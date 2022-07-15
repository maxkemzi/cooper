import styled, {css} from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

export const TextareaWrapper = styled.div<{isFocused?: boolean}>`
	display: flex;
	flex-direction: column;
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
	overflow: hidden;
	border: 1px solid ${({theme}) => theme.colors.darkLight};
	transition: border-color ${({theme}) => theme.transitionBase};

	${({isFocused, theme}) =>
		isFocused &&
		css`
			border-color: ${theme.colors.dark};
		`}
`;

export const StyledTextarea = styled(TextareaAutosize)`
	resize: none;
	border: none;
	padding: 12px 20px;
	font-size: 18px;

	&::placeholder {
		opacity: 1;
		color: ${({theme}) => theme.colors.darkLight};
	}
`;
