import {ReactComponent as SearchIcon} from "@images/search-bar/search.svg";
import ScreenSizes from "@utils/constants/screenSizes";
import styled from "styled-components";
import Input from "../Input/Input";

export const StyledSearchBar = styled.div`
	position: relative;
	width: 300px;
	height: 48px;

	@media (max-width: ${ScreenSizes.SmDesktopWidth}px) {
		width: 250px;
	}
`;

export const SearchBarIcon = styled(SearchIcon)`
	position: absolute;
	left: 20px;
	top: 50%;
	transform: translateY(-50%);

	path {
		transition: stroke ${({theme}) => theme.transitionBase};
	}
`;

export const SearchBarInput = styled(Input)`
	width: 100%;
	height: 100%;
	padding: 0 56px;
	border: none;
	transition: box-shadow ${({theme}) => theme.transitionBase};
	border-radius: ${({theme}) => theme.borderRadius};

	&:focus {
		outline: none;
		box-shadow: ${({theme}) => theme.boxShadowBase};
	}

	&:focus + ${SearchBarIcon} path {
		stroke: ${({theme}) => theme.colors.accent};
	}
`;

export const SearchBarClearButton = styled.button`
	position: absolute;
	right: 20px;
	top: 50%;
	width: 16px;
	height: 16px;
	transform: translateY(-50%);

	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		margin: -12px;
	}

	svg::before,
	svg::after {
		transition: background ${({theme}) => theme.transitionBase};
	}

	&:hover svg::before,
	&:hover svg::after {
		background: ${({theme}) => theme.colors.accent};
	}
`;
