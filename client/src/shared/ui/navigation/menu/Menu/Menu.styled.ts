import {commonStyles} from "@shared/theme";
import styled from "styled-components";

const MenuStyled = styled.div`
	max-width: 200px;
	position: absolute;
	top: calc(100% + ${({theme}) => theme.spacing.xs});
	right: 0;
	background: ${({theme}) => theme.colors.textPrimary.main};
	padding: 0 ${({theme}) => theme.spacing.md};
	border-radius: ${({theme}) => theme.borderRadiuses.main};
	font-size: ${({theme}) => theme.fontSizes.md};
	color: ${({theme}) => theme.colors.background.main};
	box-shadow: ${({theme}) => theme.boxShadows.main};

	${commonStyles}
`;

export {MenuStyled};
