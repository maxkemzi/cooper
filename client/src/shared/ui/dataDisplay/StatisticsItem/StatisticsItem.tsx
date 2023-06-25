import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {HTMLAttributes, forwardRef} from "react";
import {Typography} from "../../Typography";
import {StatisticsItemStyled} from "./StatisticsItem.styled";

interface Props extends ThemingProps, HTMLAttributes<HTMLDivElement> {
	title: string;
	value: string | number;
}

const StatisticsItem = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {title, value, commonStyleProps, ...rest} = useCommonStyleProps(props);

	return (
		<StatisticsItemStyled ref={ref} {...commonStyleProps} {...rest}>
			<Typography textTransform="uppercase">{title}</Typography>
			<Typography variant="highlight">{value}</Typography>
		</StatisticsItemStyled>
	);
});

export default StatisticsItem;
