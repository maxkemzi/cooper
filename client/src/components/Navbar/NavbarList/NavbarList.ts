import styled, {css} from "styled-components";

type FlexDirection = "row" | "column";
type GapDirection = "horizontal" | "vertical";

interface NavbarListProps {
	flexDirection?: FlexDirection;
	gap?: string;
	gapDirection?: GapDirection;
}

const NavbarList = styled.ul<NavbarListProps>`
	display: flex;
	flex-direction: ${({flexDirection}) => flexDirection};

	li:not(:last-child) {
		${({gapDirection, gap}) =>
			gapDirection === "vertical"
				? css`
						margin-bottom: ${gap};
				  `
				: css`
						margin-right: ${gap};
				  `}
	}
`;

export default NavbarList;
