import styled from "styled-components";

const StyledContactForm = styled.div`
	max-width: 352px;
`;

const ContactFormAlert = styled.p`
	font-size: ${({theme}) => theme.fontSizes.md};
	color: ${({theme}) => theme.colors.error.main};
	margin-bottom: ${({theme}) => theme.spacing.xs};
`;

const ContactFormFields = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: ${({theme}) => theme.spacing.md};
	margin-bottom: ${({theme}) => theme.spacing.lg};

	${({theme}) => theme.media.md} {
		row-gap: ${({theme}) => theme.spacing.sm};
		margin-bottom: ${({theme}) => theme.spacing.sm};
	}
`;

export {ContactFormAlert, ContactFormFields, StyledContactForm};
