import styled, {css} from "styled-components";

const LayoutStyled = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100%;
	position: relative;
	overflow: hidden;
`;

interface MainPropsStyled {
	withPadding?: boolean;
}

const MainStyled = styled.main<MainPropsStyled>`
	${({theme, withPadding}) =>
		withPadding &&
		css`
			padding-top: ${theme.spacing.lg};
			padding-bottom: ${theme.spacing.lg};
		`};
`;

// eslint-disable-next-line import/prefer-default-export
export {LayoutStyled, MainStyled};
