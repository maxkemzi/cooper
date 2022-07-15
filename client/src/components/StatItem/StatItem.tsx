import React, {FC} from "react";
import {StatItemTitle, StatItemValue, StyledStatItem} from "./StatItem.styled";

interface StatItemProps {
	title: string;
	value: string | number;
}

const StatItem: FC<StatItemProps> = ({title, value}) => (
	<StyledStatItem>
		<StatItemTitle>{title}</StatItemTitle>
		<StatItemValue>{value}</StatItemValue>
	</StyledStatItem>
);

export default StatItem;
