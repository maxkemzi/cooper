import {MarginProps} from "@customTypes/index";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const FormLink = styled(NavLink)<MarginProps>`
	display: block;
	color: ${({theme}) => theme.colors.accent};
	margin-bottom: ${({marginBottom}) => marginBottom};
	margin-top: ${({marginTop}) => marginTop};
	margin-left: ${({marginLeft}) => marginLeft};
	margin-right: ${({marginRight}) => marginRight};
`;

export default FormLink;
