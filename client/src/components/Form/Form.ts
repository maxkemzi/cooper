import {MarginProps} from "@customTypes/styled";
import {Form as FormikForm} from "formik";
import styled from "styled-components";

const Form = styled(FormikForm)<MarginProps>`
	margin-bottom: ${({marginBottom}) => marginBottom};
	margin-top: ${({marginTop}) => marginTop};
	margin-left: ${({marginLeft}) => marginLeft};
	margin-right: ${({marginRight}) => marginRight};
`;

export default Form;
