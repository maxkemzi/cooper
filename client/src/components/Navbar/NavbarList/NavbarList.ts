import styled from "styled-components";

type FlexDirection = "row" | "column";

interface NavbarListProps {
	flexDirection?: FlexDirection;
	gap?: string;
}

const NavbarList = styled.ul<NavbarListProps>`
	display: flex;
	flex-direction: ${({flexDirection}) => flexDirection};

	li:not(:last-child) {
		margin-right: ${({gap}) => gap};
	}
`;

export default NavbarList;
