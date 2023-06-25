import {commonStyles} from "@shared/theme";
import styled from "styled-components";

const RadioGroupStyled = styled.div`
	${commonStyles}
`;

const TitleStyled = styled.p`
	margin-bottom: ${({theme}) => theme.spacing.sm};
	text-transform: capitalize;
`;

const FlexContainerStyled = styled.div`
	display: flex;
`;

export {FlexContainerStyled, RadioGroupStyled, TitleStyled};
