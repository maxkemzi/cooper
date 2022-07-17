import React, {FC} from "react";
import {SocialItemIcon, SocialItemLink} from "./SocialItem.styled";

interface SocialItemProps {
	icon: FC;
	path: string;
}

const SocialItem: FC<SocialItemProps> = ({icon: Icon, path}) => (
	<li>
		<SocialItemLink href={path} rel="noreferrer noopener" target="_blank">
			<SocialItemIcon as={Icon} />
		</SocialItemLink>
	</li>
);

export default SocialItem;
