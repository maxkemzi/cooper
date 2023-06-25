import {commonStyles, fontMixin} from "@shared/theme";
import styled from "styled-components";

const TagItemStyled = styled.div`
	${fontMixin.montserrat.regular}
	font-size: ${({theme}) => theme.fontSizes.md};
	padding: ${({theme}) => theme.spacing.xs} ${({theme}) => theme.spacing.sm};
	background: ${({theme}) => theme.colors.surface.main};
	border-radius: ${({theme}) => theme.borderRadiuses.full};

	${commonStyles}
`;

// eslint-disable-next-line import/prefer-default-export
export {TagItemStyled};
