import styled, {css} from "styled-components";

interface HeaderProps {
	isAbsolute?: boolean;
}

export const StyledHeader = styled.header<HeaderProps>`
	position: relative;
	padding: 28px 0;
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

export const HeaderFlex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const HeaderEndFlex = styled.div`
	display: flex;
	align-items: center;
`;
