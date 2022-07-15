import styled, {css} from "styled-components";

type TextSize = "medium" | "large";

interface TextProps {
	size?: TextSize;
	marginBottom?: number;
	marginTop?: number;
	marginLeft?: number;
	marginRight?: number;
}

const Text = styled.p<TextProps>`
	margin-bottom: ${({marginBottom}) => marginBottom}px;
	margin-top: ${({marginTop}) => marginTop}px;
	margin-left: ${({marginLeft}) => marginLeft}px;
	margin-right: ${({marginRight}) => marginRight}px;

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
