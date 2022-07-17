import {MarginProps} from "@customTypes/styled";
import styled from "styled-components";

export const StyledStatItem = styled.div<MarginProps>`
	font-weight: 600;
	font-size: 16px;
	margin-bottom: ${({marginBottom}) => marginBottom};
	margin-top: ${({marginTop}) => marginTop};
	margin-left: ${({marginLeft}) => marginLeft};
	margin-right: ${({marginRight}) => marginRight};
`;

export const StatItemTitle = styled.p`
	text-transform: uppercase;
`;

export const StatItemValue = styled.p`
	color: ${({theme}) => theme.colors.accent};
`;
