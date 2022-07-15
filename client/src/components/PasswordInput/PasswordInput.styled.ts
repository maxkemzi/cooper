import styled from "styled-components";
import Input from "../Input/Input";

export const Wrapper = styled.div`
	position: relative;
`;

export const StyledPasswordInput = styled(Input)`
	padding-right: 64px;
`;

export const Button = styled.button`
	position: absolute;
	top: 50%;
	right: 20px;
	transform: translateY(-50%);
	display: flex;
	align-items: center;
`;
