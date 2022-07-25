import styled from "styled-components";

const MenuSection = styled.ul`
	overflow: hidden;
	padding: 8px 0;
	border-bottom: 1px solid ${({theme}) => theme.colors.accentLight};

	&:last-child {
		border: none;
	}
`;

export default MenuSection;
