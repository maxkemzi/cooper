import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {AnchorHTMLAttributes, forwardRef} from "react";
import {BrandLogoIconName, IconVariant} from "../../icons";
import {IconStyled, SocialItemStyled} from "./SocialItem.styled";

type Props = ThemingProps &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
		iconName: BrandLogoIconName;
		iconVariant?: IconVariant;
		to: string;
	};

const SocialItem = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
	const {
		iconName,
		to,
		iconVariant = "solid",
		commonStyleProps,
		...rest
	} = useCommonStyleProps(props);

	return (
		<SocialItemStyled
			ref={ref}
			href={to}
			rel="noreferrer noopener"
			target="_blank"
			{...commonStyleProps}
			{...rest}
		>
			<IconStyled size={40} name={iconName} variant={iconVariant} />
		</SocialItemStyled>
	);
});

export default SocialItem;
