import styled from "styled-components";

const FormFieldsStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: ${({theme}) => theme.spacing.lg};
	row-gap: ${({theme}) => theme.spacing.lg};
`;

// eslint-disable-next-line import/prefer-default-export
export {FormFieldsStyled};
