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
`;

const LeftContentStyled = styled.div`
	grid-area: left;
	justify-self: start;
`;

const CenterContentStyled = styled.div`
	grid-area: center;
	justify-self: center;
`;

const RightContentStyled = styled.div`
	grid-area: right;
	justify-self: end;
`;

const GridContainer = styled.div`
	display: grid;
	grid-gap: ${({theme}) => theme.spacing.md};
	align-items: center;
	grid-template-areas: "left center right";
	grid-template-columns: 1fr 1fr 1fr;

	${({theme}) => theme.media.md} {
		grid-template-areas: "left right center";
		grid-template-columns: 1fr 1fr;
	}
`;

export {
	GridContainer,
	StyledHeader,
	CenterContentStyled,
	LeftContentStyled,
	RightContentStyled
};
