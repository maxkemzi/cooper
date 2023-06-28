import {FormTextField} from "@shared/form";
import styled from "styled-components";

const TitleFieldStyled = styled(FormTextField)`
	font-size: ${({theme}) => theme.fontSizes.lg};

	${({theme}) => theme.media.md} {
		font-size: ${({theme}) => theme.fontSizes.md};
	}
`;

const BudgetFieldStyled = styled(FormTextField)`
	margin-bottom: ${({theme}) => theme.spacing.md};
`;

const GridContainerStyled = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-gap: ${({theme}) => theme.spacing.md};
	margin-bottom: ${({theme}) => theme.spacing.lg};

	${({theme}) => theme.media.md} {
		grid-gap: ${({theme}) => theme.spacing.sm};
		margin-bottom: ${({theme}) => theme.spacing.md};
	}

	${({theme}) => theme.media.sm} {
		grid-template-columns: 1fr;
	}
`;

export {TitleFieldStyled, GridContainerStyled, BudgetFieldStyled};
