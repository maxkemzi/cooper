import {FormRadioGroupField} from "@shared/form";
import styled from "styled-components";

const FormRadioGroupFieldStyled = styled(FormRadioGroupField)`
	margin-bottom: ${({theme}) => theme.spacing.lg};

	${({theme}) => theme.media.md} {
		margin-bottom: ${({theme}) => theme.spacing.sm};
	}
`;

// eslint-disable-next-line import/prefer-default-export
export {FormRadioGroupFieldStyled};
