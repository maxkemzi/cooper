import {commonStyles} from "@shared/theme";
import styled from "styled-components";

const AvatarStyled = styled.img`
	display: block;
	object-fit: cover;
	max-width: 100%;
	border-radius: ${({theme}) => theme.borderRadiuses.main};

	${commonStyles}
`;

export {AvatarStyled};
