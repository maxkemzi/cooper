import {MarginProps} from "@customTypes/styled";
import styled from "styled-components";

const FormStatus = styled.p<MarginProps>`
	margin-bottom: ${({marginBottom}) => marginBottom};
	margin-top: ${({marginTop}) => marginTop};
	margin-left: ${({marginLeft}) => marginLeft};
	margin-right: ${({marginRight}) => marginRight};
	color: ${({theme}) => theme.colors.danger};
`;

export default FormStatus;
