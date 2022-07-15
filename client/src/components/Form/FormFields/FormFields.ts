import {MarginProps} from "@customTypes/index";
import styled from "styled-components";

interface FormFieldsProps extends MarginProps {
	gap?: string;
}

const FormFields = styled.div<FormFieldsProps>`
	margin-bottom: ${({marginBottom}) => marginBottom};
	margin-top: ${({marginTop}) => marginTop};
	margin-left: ${({marginLeft}) => marginLeft};
	margin-right: ${({marginRight}) => marginRight};

	display: flex;
	flex-direction: column;

	& > div:not(:last-child) {
		margin-bottom: ${({gap}) => gap};
	}
`;

export default FormFields;
