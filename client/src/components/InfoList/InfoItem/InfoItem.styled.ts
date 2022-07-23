import styled from "styled-components";

export const StyledInfoItem = styled.li`
	overflow: hidden;

	&:not(:last-child) {
		padding-right: 16px;
	}
`;

export const InfoItemValue = styled.p`
	font-weight: 600;
	text-transform: capitalize;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;

export const InfoItemTitle = styled.p`
	text-transform: uppercase;
	font-size: 16px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;
