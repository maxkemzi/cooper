import {MarginProps} from "@customTypes/styled";
import styled from "styled-components";

const Input = styled.input<MarginProps>`
	margin-bottom: ${({marginBottom}) => marginBottom};
	margin-top: ${({marginTop}) => marginTop};
	margin-left: ${({marginLeft}) => marginLeft};
	margin-right: ${({marginRight}) => marginRight};
	width: 100%;
	border: 1px solid ${({theme}) => theme.colors.darkLight};
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
	padding: 12px 20px;
	transition: border-color ${({theme}) => theme.transitionBase};
	font-size: 18px;
	background: ${({theme}) => theme.colors.light};

	&:focus {
		outline: none;
		border-color: ${({theme}) => theme.colors.dark};
	}

	&::placeholder {
		opacity: 1;
		color: ${({theme}) => theme.colors.darkLight};
	}
`;

export default Input;
