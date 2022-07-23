import styled, {css} from "styled-components";

const StyledSaveButton = styled.button<{isActive: boolean}>`
	position: relative;
	z-index: 15;
	display: flex;
	align-items: center;

	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		margin: -12px;
	}

	${({isActive, theme}) =>
		isActive &&
		css`
			svg {
				fill: ${theme.colors.accent};
			}
		`}

	svg {
		transition: fill ${({theme}) => theme.transitionBase};
	}
`;

export default StyledSaveButton;
