import {NavLink} from "react-router-dom";
import styled from "styled-components";
import Title from "../../../Title/Title";

export const StyledProjectItemHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;
`;

export const ItemHeaderTitle = styled(Title)`
	border-bottom: 1px solid transparent;
	display: inline-block;
	vertical-align: bottom;
	overflow: hidden;
	text-overflow: ellipsis;
	transition: all ${({theme}) => theme.transitionBase};
`;

export const ItemHeaderUsername = styled.p`
	margin-right: 12px;
	font-weight: 600;
`;

export const ItemHeaderUserLink = styled(NavLink)`
	display: flex;
	align-items: center;
`;
