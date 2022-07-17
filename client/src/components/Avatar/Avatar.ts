import styled from "styled-components";
import ImageThumbnail from "@images/thumbnail.svg";
import {MarginProps} from "@customTypes/styled";

interface AvatarProps extends MarginProps {
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
	margin-bottom: ${({marginBottom}) => marginBottom};
	margin-top: ${({marginTop}) => marginTop};
	margin-left: ${({marginLeft}) => marginLeft};
	margin-right: ${({marginRight}) => marginRight};
	display: block;
	object-fit: cover;
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
`;

export default Avatar;
