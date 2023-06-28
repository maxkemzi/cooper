import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {HTMLAttributes, forwardRef} from "react";
import {Typography} from "../../Typography";
import {InfoItemStyled} from "./InfoItem.styled";

interface Props extends ThemingProps, HTMLAttributes<HTMLDivElement> {
	value: string | number;
	title: string;
}

const InfoItem = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {value, title, commonStyleProps, ...rest} = useCommonStyleProps(props);

	return (
		<InfoItemStyled ref={ref} {...commonStyleProps} {...rest}>
			<Typography textTransform="capitalize" noWrap>
				{value}
			</Typography>
			<Typography textTransform="uppercase" variant="subtitle2" noWrap>
				{title}
			</Typography>
		</InfoItemStyled>
	);
});

export default InfoItem;
