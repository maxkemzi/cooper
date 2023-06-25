import styled from "styled-components";

const EditProfileFormFields = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 400px;
	row-gap: ${({theme}) => theme.spacing.md};
	margin-bottom: ${({theme}) => theme.spacing.lg};

	${({theme}) => theme.media.md} {
		row-gap: ${({theme}) => theme.spacing.sm};
		margin-bottom: ${({theme}) => theme.spacing.sm};
	}
`;

// eslint-disable-next-line import/prefer-default-export
export {EditProfileFormFields};
