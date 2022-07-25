import {MarginProps} from "@customTypes/styled";
import ScreenSizes from "@utils/constants/screenSizes";
import styled, {css} from "styled-components";

type TitleSize = "medium" | "large" | "small";

interface TitleProps extends MarginProps {
	size?: TitleSize;
}

const Title = styled.h1<TitleProps>`
	margin-bottom: ${({marginBottom}) => marginBottom};
	margin-top: ${({marginTop}) => marginTop};
	margin-left: ${({marginLeft}) => marginLeft};
	margin-right: ${({marginRight}) => marginRight};
	word-break: break-word;

	${({size}) => {
		switch (size) {
			case "large":
				return css`
					font-size: 50px;
					font-weight: 800;

					@media (max-width: ${ScreenSizes.TabletWidth}px) {
						font-size: 36px;
					}
				`;
			case "medium":
				return css`
					font-size: 36px;
					font-weight: 800;

					@media (max-width: ${ScreenSizes.TabletWidth}px) {
						font-size: 28px;
					}
				`;
			default:
				return css`
					font-size: 24px;
					font-weight: 600;

					@media (max-width: ${ScreenSizes.TabletWidth}px) {
						font-size: 20px;
					}
				`;
		}
	}}
`;

export default Title;
