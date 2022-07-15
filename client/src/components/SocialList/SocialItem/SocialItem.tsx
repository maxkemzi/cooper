import React, {FC} from "react";
import {ISocial} from "@customTypes/index";
import {SocialItemIcon, SocialItemLink} from "./SocialItem.styled";

const SocialItem: FC<ISocial> = ({icon: Icon, path}) => (
	<li>
		<SocialItemLink href={path} rel="noreferrer noopener" target="_blank">
			<SocialItemIcon as={Icon} />
		</SocialItemLink>
	</li>
);

export default SocialItem;
