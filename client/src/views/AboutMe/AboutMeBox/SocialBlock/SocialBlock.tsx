import {SocialItem, SocialList} from "@components/SocialList";
import Title from "@components/Title/Title";
import useWindowSize from "@hooks/useWindowSize";
import {ReactComponent as GitHubIcon} from "@images/social/github.svg";
import {ReactComponent as InstagramIcon} from "@images/social/instagram.svg";
import {ReactComponent as TelegramIcon} from "@images/social/telegram.svg";
import ScreenSizes from "@utils/constants/screenSizes";
import React from "react";

const SocialBlock = () => {
	const {width} = useWindowSize();
	return (
		<div>
			<Title
				marginBottom={width <= ScreenSizes.TabletWidth ? "12px" : "24px"}
				size="small"
				as="h3"
			>
				I&apos;m on social media and services:
			</Title>
			<SocialList gap="20px">
				<SocialItem
					icon={InstagramIcon}
					path="https://instagram.com/maxkemzi"
				/>
				<SocialItem icon={TelegramIcon} path="https://t.me/maxkemzi" />
				<SocialItem icon={GitHubIcon} path="https://github.com/Kemzi-coder" />
			</SocialList>
		</div>
	);
};

export default SocialBlock;
