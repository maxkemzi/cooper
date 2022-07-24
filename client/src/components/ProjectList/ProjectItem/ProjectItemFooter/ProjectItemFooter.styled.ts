import ScreenSizes from "@utils/constants/screenSizes";
import styled from "styled-components";
import Button from "../../../Button/Button";

export const StyledProjectItemFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-shrink: 0;

	@media (max-width: ${ScreenSizes.PhoneWidth}px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const ItemFooterDate = styled.p`
	font-size: 16px;
	align-self: flex-end;

	@media (max-width: ${ScreenSizes.PhoneWidth}px) {
		align-self: flex-start;
	}
`;

export const ItemFooterButtons = styled.div`
	display: flex;
	align-items: center;
	margin-right: 16px;

	@media (max-width: ${ScreenSizes.PhoneWidth}px) {
		margin-right: 0;
		margin-bottom: 12px;
	}
`;

export const SeeMoreButton = styled(Button)`
	font-size: 14px;
	padding: 8px 16px;
	margin-right: 12px;
`;
