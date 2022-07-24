import ScreenSizes from "@utils/constants/screenSizes";
import styled, {css} from "styled-components";

export const StyledProjectItem = styled.div<{superMode: boolean}>`
	${({superMode}) =>
		superMode &&
		css`
			display: flex;
			flex-direction: column;
		`}

	background: ${({theme}) => theme.colors.light};
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
	transition: box-shadow ${({theme}) => theme.transitionBase};
	overflow: hidden;

	&:hover {
		box-shadow: ${({theme}) => theme.boxShadowBase};
	}
`;

export const ProjectItemContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 24px;
	height: 100%;

	@media (max-width: ${ScreenSizes.PhoneWidth}px) {
		padding: 16px;
	}
`;

export const ProjectItemDesc = styled.p`
	flex-grow: 1;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	word-wrap: break-word;
	line-height: 1.5;
	margin-bottom: 16px;

	@media (max-width: ${ScreenSizes.PhoneWidth}px) {
		margin-bottom: 12px;
	}
`;
