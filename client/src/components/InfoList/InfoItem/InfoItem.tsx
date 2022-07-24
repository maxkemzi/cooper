import React, {FC} from "react";
import {InfoItemValue, InfoItemTitle} from "./InfoItem.styled";

interface InfoItemProps {
	value: string | number;
	title: string;
}

const InfoItem: FC<InfoItemProps> = ({value, title}) => (
	<li>
		<InfoItemValue>{value}</InfoItemValue>
		<InfoItemTitle>{title}</InfoItemTitle>
	</li>
);

export default InfoItem;
