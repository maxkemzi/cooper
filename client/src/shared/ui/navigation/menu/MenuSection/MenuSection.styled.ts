import styled from "styled-components";

const MenuSectionStyled = styled.ul`
	overflow: hidden;
	padding: ${({theme}) => theme.spacing.sm} 0;
	border-bottom: 1px solid ${({theme}) => theme.colors.secondaryLight.main};

	&:last-child {
		border: none;
	}
`;

export {MenuSectionStyled};
