import {MarginProps} from "@customTypes/styled";
import styled, {css} from "styled-components";

type Variant = "primary" | "outline";
type Size = "medium" | "large" | "small";

export interface ButtonProps extends MarginProps {
	variant?: Variant;
	size?: Size;
}

const Button = styled.button.attrs<ButtonProps>(({type}) => ({
	type: type || "button"
}))<ButtonProps>`
	margin-bottom: ${({marginBottom}) => marginBottom};
	margin-top: ${({marginTop}) => marginTop};
	margin-left: ${({marginLeft}) => marginLeft};
	margin-right: ${({marginRight}) => marginRight};

	text-align: center;
	text-transform: uppercase;
	font-size: 18px;
	letter-spacing: 0.1em;
	border-radius: ${({theme}) => theme.borderRadius};
	font-weight: 600;

	${({size}) => {
		switch (size) {
			case "large":
				return css`
					padding: 16px 32px;
				`;
			case "small":
				return css`
					font-size: 14px;
					padding: 8px 16px;
				`;
			default:
				return css`
					padding: 12px 28px;
				`;
		}
	}}

	${({variant, theme}) => {
		switch (variant) {
			case "outline":
				return css`
					border: 1px solid ${theme.colors.accent};
					background: transparent;
					color: ${theme.colors.accent};
					transition: all ${theme.transitionBase};

					&:hover:not(:disabled) {
						border-color: ${theme.colors.accent};
						color: ${theme.colors.accent};
					}
				`;
			default:
				return css`
					background: ${theme.colors.accent};
					color: ${theme.colors.light};
					transition: all ${theme.transitionBase};

					&:hover:not(:disabled) {
						background: ${theme.colors.accent};
						box-shadow: ${theme.boxShadowBase};
					}

					&:disabled {
						background: ${theme.colors.darkLight};
					}
				`;
		}
	}}
`;

export default Button;
