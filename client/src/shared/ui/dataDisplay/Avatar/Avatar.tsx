import FallbackImage from "@images/profile/thumbnail.svg";
import {AvatarSize, ThemingProps, useCommonStyleProps} from "@shared/theme";
import {ImgHTMLAttributes, forwardRef, useState} from "react";
import {useTheme} from "styled-components";
import {AvatarStyled} from "./Avatar.styled";

interface Props extends ThemingProps, ImgHTMLAttributes<HTMLImageElement> {
	imagePath?: string | null;
	size?: AvatarSize;
}

const Avatar = forwardRef<HTMLImageElement, Props>((props, ref) => {
	const {
		imagePath,
		size = "sm",
		commonStyleProps,
		...rest
	} = useCommonStyleProps(props);

	const theme = useTheme();
	const sizeInPx = theme.avatarSizes[size];

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
			width={sizeInPx}
			height={sizeInPx}
			onError={handleError}
			onLoad={handleLoad}
			alt="avatar"
			{...commonStyleProps}
			{...rest}
		/>
	);
});

export default Avatar;
