import {MarginProps, commonStyles, fontMixin} from "@shared/theme";
import styled from "styled-components";

const StatisticsItemStyled = styled.div<MarginProps>`
	${fontMixin.montserrat.semiBold}

	${commonStyles}
`;

export {StatisticsItemStyled};
