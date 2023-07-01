import styled from "styled-components";

const ContentStyled = styled.div`
	max-width: 352px;
`;

const FieldsStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({theme}) => theme.spacing.md};
	margin-bottom: ${({theme}) => theme.spacing.lg};
`;

export {FieldsStyled, ContentStyled};
