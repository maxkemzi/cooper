import ScreenSizes from "@utils/constants/screenSizes";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import Title from "../../../Title/Title";

export const StyledProjectItemHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;
	overflow: hidden;

	@media (max-width: ${ScreenSizes.PhoneWidth}px) {
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 8px;
	}
`;

export const ItemHeaderTitle = styled(Title)`
	vertical-align: bottom;
	transition: color ${({theme}) => theme.transitionBase};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const ItemHeaderTitleLink = styled(NavLink)`
	overflow: hidden;
	display: block;
	width: 100%;
	margin-right: 16px;

	&:hover ${ItemHeaderTitle} {
		color: ${({theme}) => theme.colors.accent};
	}

	@media (max-width: ${ScreenSizes.PhoneWidth}px) {
		margin-bottom: 8px;
		margin-right: 0;
	}
`;

export const ItemHeaderUsername = styled.p`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-right: 12px;
	font-weight: 600;

	@media (max-width: ${ScreenSizes.PhoneWidth}px) {
		margin-right: 0;
		order: 1;
	}
`;

export const ItemHeaderUserLink = styled(NavLink)`
	display: flex;
	align-items: center;

	@media (max-width: ${ScreenSizes.PhoneWidth}px) {
		width: 100%;
	}
`;
