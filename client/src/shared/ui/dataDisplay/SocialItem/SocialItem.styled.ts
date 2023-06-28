import {commonStyles} from "@shared/theme";
import styled from "styled-components";
import {Icon} from "../../icons";

const IconStyled = styled(Icon)`
	transition: color ${({theme}) => theme.transitions.main};
`;

const SocialItemStyled = styled.a`
	display: flex;

	&:hover ${IconStyled} {
		color: ${({theme}) => theme.colors.secondary.main} !important;
	}

	${commonStyles}
`;

export {IconStyled, SocialItemStyled};
