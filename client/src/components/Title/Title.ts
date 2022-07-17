import {MarginProps} from "@customTypes/styled";
import styled, {css} from "styled-components";

type TitleSize = "medium" | "large";

interface TitleProps extends MarginProps {
	size?: TitleSize;
}

const Title = styled.h1<TitleProps>`
	margin-bottom: ${({marginBottom}) => marginBottom};
	margin-top: ${({marginTop}) => marginTop};
	margin-left: ${({marginLeft}) => marginLeft};
	margin-right: ${({marginRight}) => marginRight};

	${({size}) => {
		switch (size) {
			case "large":
				return css`
					font-size: 50px;
					font-weight: 800;
				`;
			default:
				return css`
					font-size: 24px;
					font-weight: 600;
				`;
		}
	}}
`;

export default Title;
