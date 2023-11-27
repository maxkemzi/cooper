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
	const [hasError, setHasError] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	const getImagePath = () => {
		if (!imagePath || hasError || !isLoaded) {
			return FallbackImage;
		}

		if (imagePath.startsWith("blob:")) {
			return imagePath;
		}

		return `${process.env.SERVER_URL}/${imagePath}`;
	};

	const sizeInPx = theme.avatarSizes[size];

	const handleError = () => setHasError(true);
	const handleLoad = () => setIsLoaded(true);

	return (
		<AvatarStyled
			ref={ref}
			src={getImagePath()}
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
