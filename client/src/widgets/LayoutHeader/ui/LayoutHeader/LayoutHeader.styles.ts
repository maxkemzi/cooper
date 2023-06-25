import styled, {css} from "styled-components";

interface HeaderProps {
	isAbsolute?: boolean;
}

const StyledHeader = styled.header<HeaderProps>`
	position: relative;
	padding: ${({theme}) => theme.spacing.lg} 0;
	z-index: 999;

	${({isAbsolute}) =>
		isAbsolute &&
		css`
			position: absolute;
			padding-bottom: 0;
			left: 0;
			right: 0;
			top: 0;
		`}

	${({theme}) => theme.media.md} {
		padding: ${({theme}) => theme.spacing.md} 0;
	}
`;

const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export {FlexContainer, StyledHeader};
