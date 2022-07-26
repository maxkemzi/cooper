import ScreenSizes from "@utils/constants/screenSizes";
import styled from "styled-components";

const StyledProjectsCountSkeleton = styled.div`
	display: flex;
	align-items: center;
	margin-right: 16px;
	width: 152px;
	background: ${({theme}) => theme.colors.light};
	padding: 12px 20px;
	border-radius: ${({theme}) => theme.borderRadiusSmaller};

	@media (max-width: ${ScreenSizes.SmDesktopWidth}px) {
		width: 105px;
	}

	@media (max-width: ${ScreenSizes.PhoneWidth}px) {
		margin-right: 0;
		align-self: flex-start;
		margin-bottom: 12px;
	}
`;

export default StyledProjectsCountSkeleton;
