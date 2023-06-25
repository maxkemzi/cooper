import styled from "styled-components";

const MenuItemStyled = styled.li`
	padding: ${({theme}) => theme.spacing.xs} 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

// eslint-disable-next-line import/prefer-default-export
export {MenuItemStyled};
