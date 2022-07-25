import {Dropdown} from "@components/Dropdown";
import ScreenSizes from "@utils/constants/screenSizes";
import styled from "styled-components";

const StyledCreateFormDropdown = styled(Dropdown)`
	@media (max-width: ${ScreenSizes.SmTabletWidth}px) {
		order: -1;
	}
`;

export default StyledCreateFormDropdown;
