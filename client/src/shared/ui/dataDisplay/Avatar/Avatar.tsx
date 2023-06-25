import FallbackImage from "@images/profile/thumbnail.svg";
import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {ImgHTMLAttributes, forwardRef, useState} from "react";
import {AvatarStyled} from "./Avatar.styled";

interface Props extends ThemingProps, ImgHTMLAttributes<HTMLImageElement> {
	imagePath?: string | null;
	width?: string;
	height?: string;
}

const Avatar = forwardRef<HTMLImageElement, Props>((props, ref) => {
	const {
		imagePath,
		width = "40px",
		height = "40px",
		commonStyleProps,
		...rest
	} = useCommonStyleProps(props);

	const [hasError, setHasError] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	const handleError = () => setHasError(true);

	const handleLoad = () => setIsLoaded(true);

	let path = imagePath
		? `${process.env.SERVER_URL}/${imagePath}`
		: FallbackImage;

	if (imagePath) {
		if (imagePath.startsWith("blob:")) {
			path = imagePath;
		}
	}

	if (hasError || !isLoaded) {
		path = FallbackImage;
	}

	return (
		<AvatarStyled
			ref={ref}
			src={path}
			width={width}
			height={height}
			onError={handleError}
			onLoad={handleLoad}
			alt="avatar"
			{...commonStyleProps}
			{...rest}
		/>
	);
});

export default Avatar;
