import styled, {css} from "styled-components";

export const LocationInputWrapper = styled.div`
	position: relative;
`;

export const LocationInputList = styled.ul`
	position: absolute;
	top: calc(100% + 4px);
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
	left: 0;
	width: 100%;
	background-color: ${({theme}) => theme.colors.dark};
	overflow: hidden;
	z-index: 999;
`;

interface LocationInputItemProps {
	isActive: boolean;
}

export const LocationInputItem = styled.li<LocationInputItemProps>`
	padding: 12px 28px;
	cursor: pointer;
	transition: all ${({theme}) => theme.transitionBase};

	${({isActive, theme}) =>
		isActive &&
		css`
			background: ${theme.colors.dark};
			color: ${theme.colors.accent};
		`}
`;
