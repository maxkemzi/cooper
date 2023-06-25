import {css} from "styled-components";
import {MarginTransientProps, PaddingTransientProps} from "../types";

const margin = css<MarginTransientProps>`
	margin-bottom: ${({$m, theme}) => $m && theme.spacing[$m]};
	margin-bottom: ${({$mb, theme}) => $mb && theme.spacing[$mb]};
	margin-top: ${({$mt, theme}) => $mt && theme.spacing[$mt]};
	margin-left: ${({$ml, theme}) => $ml && theme.spacing[$ml]};
	margin-right: ${({$mr, theme}) => $mr && theme.spacing[$mr]};
`;

const padding = css<PaddingTransientProps>`
	padding-bottom: ${({$p, theme}) => $p && theme.spacing[$p]};
	padding-bottom: ${({$pb, theme}) => $pb && theme.spacing[$pb]};
	padding-top: ${({$pt, theme}) => $pt && theme.spacing[$pt]};
	padding-left: ${({$pl, theme}) => $pl && theme.spacing[$pl]};
	padding-right: ${({$pr, theme}) => $pr && theme.spacing[$pr]};
`;

const commonStyles = css`
	${margin}
	${padding}
`;

const fontMixin = {
	montserrat: {
		regular: css`
			font-family: ${({theme}) => theme.fontFamilies.montserrat};
			font-weight: ${({theme}) => theme.fontWeights.regular};
		`,
		semiBold: css`
			font-family: ${({theme}) => theme.fontFamilies.montserrat};
			font-weight: ${({theme}) => theme.fontWeights.semiBold};
		`,
		extraBold: css`
			font-family: ${({theme}) => theme.fontFamilies.montserrat};
			font-weight: ${({theme}) => theme.fontWeights.extraBold};
		`
	}
};

// eslint-disable-next-line import/prefer-default-export
export {fontMixin, commonStyles};
