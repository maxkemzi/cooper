import {MarginProps, commonStyles} from "@shared/theme";
import styled from "styled-components";

const WidgetStyled = styled.div<MarginProps>`
	background: ${({theme}) => theme.colors.surface.main};
	padding: ${({theme}) => theme.spacing.lg};
	border-radius: ${({theme}) => theme.borderRadiuses.main};

	${commonStyles}
`;

// eslint-disable-next-line import/prefer-default-export
export {WidgetStyled};
