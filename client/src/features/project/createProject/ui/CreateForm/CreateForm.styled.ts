import styled from "styled-components";

const TitleContentStyled = styled.div`
	grid-area: title;
	max-width: 100%;
`;

const BudgetContentStyled = styled.div`
	grid-area: budget;
	max-width: 100%;
`;

const DescriptionContentStyled = styled.div`
	grid-area: description;
	max-width: 100%;
`;

const OptionsContentStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({theme}) => theme.spacing.md};
	grid-area: options;
	max-width: 100%;
`;

const GridContainerStyled = styled.div`
	display: grid;
	align-items: start;
	grid-template-areas: "title budget" "description options";
	grid-template-columns: minmax(150px, 500px) minmax(150px, 300px);
	grid-gap: ${({theme}) => theme.spacing.md};
	margin-bottom: ${({theme}) => theme.spacing.lg};

	${({theme}) => theme.media.sm} {
		grid-template-areas: "title" "description" "budget" "options";
		grid-template-columns: minmax(150px, 500px);
	}
`;

export {
	GridContainerStyled,
	TitleContentStyled,
	BudgetContentStyled,
	DescriptionContentStyled,
	OptionsContentStyled
};
