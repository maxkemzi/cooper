import {FormTextField} from "@components/Form";
import ScreenSizes from "@utils/constants/screenSizes";
import styled from "styled-components";

export const CreateFormTitleInput = styled(FormTextField)`
	font-size: 24px;

	@media (max-width: ${ScreenSizes.TabletWidth}px) {
		font-size: 20px;
	}
`;

export const CreateFormGrid = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-gap: 20px;
	margin-bottom: 28px;

	@media (max-width: ${ScreenSizes.TabletWidth}px) {
		grid-gap: 12px;
		margin-bottom: 16px;
	}

	@media (max-width: ${ScreenSizes.SmTabletWidth}px) {
		grid-template-columns: 1fr;
	}
`;
