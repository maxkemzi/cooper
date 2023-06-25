import {commonStyles, fontMixin} from "@shared/theme";
import styled from "styled-components";

const InfoItemStyled = styled.div`
	${commonStyles}
`;

const ValueStyled = styled.p`
	${fontMixin.montserrat.semiBold}
	text-transform: capitalize;
	white-space: nowrap;
`;

const TitleStyled = styled.p`
	${fontMixin.montserrat.regular}
	text-transform: uppercase;
	white-space: nowrap;
	font-size: ${({theme}) => theme.fontSizes.sm};
`;

export {InfoItemStyled, TitleStyled, ValueStyled};
