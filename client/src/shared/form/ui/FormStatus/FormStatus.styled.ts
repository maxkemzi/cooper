import {commonStyles} from "@shared/theme";
import styled from "styled-components";

const FormStatusStyled = styled.p`
	color: ${({theme}) => theme.colors.error.main};

	${commonStyles}
`;

export {FormStatusStyled};
