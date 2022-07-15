import styled from "styled-components";

export const StyledStatItem = styled.div`
	font-weight: 600;
	font-size: 16px;
`;

export const StatItemTitle = styled.p`
	text-transform: uppercase;
`;

export const StatItemValue = styled.p`
	color: ${({theme}) => theme.colors.accent};
`;
