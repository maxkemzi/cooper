import styled from "styled-components";

const WrapperStyled = styled.div`
	position: relative;
`;

const ButtonStyled = styled.button`
	position: absolute;
	top: 50%;
	right: ${({theme}) => theme.spacing.lg};
	transform: translateY(-50%);
	display: flex;
`;

export {ButtonStyled, WrapperStyled};
