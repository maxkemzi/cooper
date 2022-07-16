import styled from "styled-components";

const Menu = styled.div`
	position: absolute;
	top: calc(100% + 4px);
	right: 0;
	background: ${({theme}) => theme.colors.dark};
	padding: 0 16px;
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
	font-size: 16px;
	color: ${({theme}) => theme.colors.light};
	box-shadow: ${({theme}) => theme.boxShadowBase};
`;

export default Menu;
