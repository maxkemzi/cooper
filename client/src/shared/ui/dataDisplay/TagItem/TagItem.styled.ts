import {commonStyles} from "@shared/theme";
import styled from "styled-components";

const TagItemStyled = styled.div`
	padding: ${({theme}) => theme.spacing.xs} ${({theme}) => theme.spacing.sm};
	background: ${({theme}) => theme.colors.surface.main};
	border-radius: ${({theme}) => theme.borderRadiuses.full};

	${commonStyles}
`;

export {TagItemStyled};
