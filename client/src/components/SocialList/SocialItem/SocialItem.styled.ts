import styled from "styled-components";

export const SocialItemIcon = styled.svg`
	path {
		transition: fill ${({theme}) => theme.transitionBase};
	}
`;

export const SocialItemLink = styled.a`
	&:hover ${SocialItemIcon} path {
		fill: ${({theme}) => theme.colors.accent};
	}
`;
