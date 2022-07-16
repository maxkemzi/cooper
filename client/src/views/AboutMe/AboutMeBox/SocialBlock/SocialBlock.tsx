import {SocialItem, SocialList} from "@components/SocialList";
import Title from "@components/Title/Title";
import {ReactComponent as GitHubIcon} from "@images/social/github.svg";
import {ReactComponent as InstagramIcon} from "@images/social/instagram.svg";
import {ReactComponent as TelegramIcon} from "@images/social/telegram.svg";
import React from "react";

const SocialBlock = () => (
	<div>
		<Title marginBottom="24px" size="medium" as="h3">
			I&apos;m on social media and services:
		</Title>
		<SocialList gap="20px">
			<SocialItem icon={InstagramIcon} path="https://instagram.com/maxkemzi" />
			<SocialItem icon={TelegramIcon} path="https://t.me/maxkemzi" />
			<SocialItem icon={GitHubIcon} path="https://github.com/Kemzi-coder" />
		</SocialList>
	</div>
);

export default SocialBlock;
