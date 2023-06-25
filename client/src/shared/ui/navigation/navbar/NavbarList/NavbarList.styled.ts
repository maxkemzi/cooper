import styled from "styled-components";
import {StyleProps} from "./types";

const NavbarListStyled = styled.ul<StyleProps>`
	display: flex;
	flex-direction: ${({$direction}) => $direction};
	gap: ${({theme, $gap}) => theme.spacing[$gap]};
`;

export {NavbarListStyled};
