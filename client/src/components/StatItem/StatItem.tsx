import {MarginProps} from "@customTypes/styled";
import React, {FC, memo} from "react";
import {StatItemTitle, StatItemValue, StyledStatItem} from "./StatItem.styled";

interface StatItemProps extends MarginProps {
	title: string;
	value: string | number;
}

const StatItem: FC<StatItemProps> = memo(({title, value, ...props}) => (
	<StyledStatItem {...props}>
		<StatItemTitle>{title}</StatItemTitle>
		<StatItemValue>{value}</StatItemValue>
	</StyledStatItem>
));

export default StatItem;
