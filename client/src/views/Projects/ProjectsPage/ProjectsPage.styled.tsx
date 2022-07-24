import styled from "styled-components";
import SearchBar from "@components/SearchBar/SearchBar";
import Dropdown from "@components/Dropdown/Dropdown";
import ScreenSizes from "@utils/constants/screenSizes";

export const ProjectsPageInner = styled.div`
	position: relative;
	background: ${({theme}) => theme.colors.darkLighter};
	padding: 28px;
	border-radius: ${({theme}) => theme.borderRadiusSmaller};

	@media (max-width: ${ScreenSizes.PhoneWidth}px) {
		padding: 20px;
	}
`;

export const StyledProjectsSearchBar = styled(SearchBar)`
	height: 100%;
`;

export const StyledProjectsDropdown = styled(Dropdown)`
	width: 100%;
	height: 100%;
`;
