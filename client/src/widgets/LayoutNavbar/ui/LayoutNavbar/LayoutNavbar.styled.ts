import {motion} from "framer-motion";
import styled from "styled-components";

const NavbarMobileStyled = styled(motion.div)`
	position: absolute;
	top: 0;
	right: 0;
	border-bottom-left-radius: ${({theme}) => theme.borderRadiuses.main};
	z-index: 999;
	box-shadow: ${({theme}) => theme.boxShadows.main};
	padding: ${({theme}) => theme.spacing.lg};
	background: ${({theme}) => theme.colors.background.main};
`;

export {NavbarMobileStyled};
