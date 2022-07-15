import React, {FC} from "react";
import {InfoItemValue, StyledInfoItem, InfoItemTitle} from "./InfoItem.styled";

interface InfoItemProps {
	value: string | number;
	title: string;
}

const InfoItem: FC<InfoItemProps> = ({value, title}) => (
	<StyledInfoItem>
		<InfoItemValue>{value}</InfoItemValue>
		<InfoItemTitle>{title}</InfoItemTitle>
	</StyledInfoItem>
);

export default InfoItem;
