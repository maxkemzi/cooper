import {MarginProps} from "@customTypes/styled";
import React, {FC, useState} from "react";
import ImageThumbnail from "@images/profile/thumbnail.svg";
import StyledAvatar from "./Avatar.styled";

interface AvatarProps extends MarginProps {
	imagePath: string;
	width?: string;
	height?: string;
}

const Avatar: FC<AvatarProps> = ({imagePath, width, height, ...props}) => {
	const [isLoaded, setIsLoaded] = useState(false);
	let path = imagePath ? `${process.env.API_URL + imagePath}` : ImageThumbnail;

	if (imagePath) {
		if (imagePath.startsWith("blob:")) {
			path = imagePath;
		}
	}

	const handleLoad = () => setIsLoaded(true);

	return (
		<StyledAvatar
			alt="avatar"
			src={isLoaded ? path : ImageThumbnail}
			width={width || "40px"}
			height={height || "40px"}
			onLoad={handleLoad}
			{...props}
		/>
	);
};

export default Avatar;
