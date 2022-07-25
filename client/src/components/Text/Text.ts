import {MarginProps} from "@customTypes/styled";
import ScreenSizes from "@utils/constants/screenSizes";
import styled, {css} from "styled-components";

type TextSize = "medium" | "large";

interface TextProps extends MarginProps {
	size?: TextSize;
}

const Text = styled.p<TextProps>`
	margin-bottom: ${({marginBottom}) => marginBottom};
	margin-top: ${({marginTop}) => marginTop};
	margin-left: ${({marginLeft}) => marginLeft};
	margin-right: ${({marginRight}) => marginRight};
	word-break: break-word;

	${({size}) => {
		switch (size) {
			case "large":
				return css`
					font-size: 22px;
					line-height: 1.5;

					@media (max-width: ${ScreenSizes.TabletWidth}px) {
						font-size: 18px;
						line-height: 1.2;
					}
				`;
			default:
				return css`
					font-size: 18px;
					line-height: 1.2;
				`;
		}
	}}
`;

export default Text;
