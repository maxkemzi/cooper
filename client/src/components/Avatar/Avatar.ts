import styled from "styled-components";
import ImageThumbnail from "@images/thumbnail.svg";

interface AvatarProps {
	imagePath: string;
	width?: number;
	height?: number;
}

const Avatar = styled.img.attrs<AvatarProps>(({width, height, imagePath}) => {
	const path = imagePath
		? `${process.env.API_URL + imagePath}`
		: ImageThumbnail;

	return {
		width: width || "40px",
		height: height || "40px",
		src: path,
		alt: "avatar"
	};
})<AvatarProps>`
	display: block;
	object-fit: cover;
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
`;

export default Avatar;
