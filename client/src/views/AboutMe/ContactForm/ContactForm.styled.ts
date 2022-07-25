import ScreenSizes from "@utils/constants/screenSizes";
import styled from "styled-components";

export const StyledContactForm = styled.div`
	width: 50%;
	@media (max-width: ${ScreenSizes.SmDesktopWidth}px) {
		width: 100%;
	}
`;

export const ContactFormContent = styled.div`
	max-width: 352px;
`;

export const ContactFormAlert = styled.p`
	font-size: 16px;
	color: ${({theme}) => theme.colors.danger};
	margin-bottom: 8px;
`;
