import styled from "styled-components";

export const StyledDropdown = styled.div`
	width: 192px;
	height: 48px;
	position: relative;
`;

export const Button = styled.button`
	position: relative;
	background: ${({theme}) => theme.colors.dark};
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
	padding: 12px 28px;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	color: ${({theme}) => theme.colors.light};
	box-shadow: ${({theme}) => theme.boxShadowBase};

	&::after {
		content: "";
		position: absolute;
		right: 28px;
		top: 19px;
		border: solid white;
		border-width: 0 2px 2px 0;
		display: inline-block;
		padding: 3px;
		transform: rotate(45deg);
	}
`;

export const List = styled.ul`
	position: absolute;
	top: calc(100% + 4px);
	left: 0;
	width: 100%;
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
	box-shadow: ${({theme}) => theme.boxShadowBase};
	z-index: 999;
	overflow: hidden;
`;

export const Title = styled.p`
	margin-right: 16px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
