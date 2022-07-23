import {MarginProps} from "@customTypes/styled";
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

	${({size}) => {
		switch (size) {
			case "large":
				return css`
					font-size: 22px;
					line-height: 1.5;
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
