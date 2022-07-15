import styled from "styled-components";

const Input = styled.input`
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
