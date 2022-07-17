import {MarginProps} from "@customTypes/styled";
import styled from "styled-components";

export const StyledRadioGroup = styled.div<MarginProps>`
	margin-bottom: ${({marginBottom}) => marginBottom};
	margin-top: ${({marginTop}) => marginTop};
	margin-left: ${({marginLeft}) => marginLeft};
	margin-right: ${({marginRight}) => marginRight};
`;

export const RadioGroupTitle = styled.p`
	margin-bottom: 8px;
	text-transform: capitalize;
`;

export const RadioGroupFlex = styled.div`
	display: flex;
`;
